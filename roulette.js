// IT Roulette Game Logic

class ITRoulette {
    constructor() {
        // Европейская рулетка: числа 0-36
        this.numbers = [
            0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
            5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26
        ];
        
        // Цвета чисел (европейская рулетка)
        this.redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        this.blackNumbers = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
        
        // Состояние игры
        this.players = [];
        this.currentPlayerIndex = 0;
        this.round = 1;
        this.bets = {};
        this.currentBetAmount = 5;
        this.history = [];
        this.isSpinning = false;
        
        // DOM элементы
        this.setupSection = document.getElementById('gameSetup');
        this.gameBoard = document.getElementById('gameBoard');
        this.canvas = document.getElementById('rouletteWheel');
        this.ctx = this.canvas.getContext('2d');
        this.playersList = document.getElementById('playersList');
        this.leaderboard = document.getElementById('leaderboard');
        this.historyList = document.getElementById('historyList');
        this.spinResultModal = document.getElementById('spinResultModal');
        this.gameOverModal = document.getElementById('gameOverModal');
        
        this.init();
    }
    
    init() {
        // Обработчики событий
        document.getElementById('startGameBtn').addEventListener('click', () => this.startGame());
        document.getElementById('endGameBtn').addEventListener('click', () => this.endGame());
        document.getElementById('spinButton').addEventListener('click', () => this.spin());
        document.getElementById('closeModalBtn').addEventListener('click', () => this.closeModal());
        document.getElementById('newGameBtn').addEventListener('click', () => this.resetGame());
        
        // Выбор фишек
        document.querySelectorAll('.chip-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentBetAmount = parseInt(e.target.dataset.value);
                document.getElementById('currentBetAmount').textContent = this.currentBetAmount;
            });
        });
        
        // Генерация таблицы ставок
        this.generateBettingTable();
        
        // Отрисовка колеса
        this.drawWheel(0);
    }
    
    generateBettingTable() {
        const grid = document.querySelector('.numbers-grid');
        grid.innerHTML = '';
        
        // Генерация чисел 1-36 в правильном порядке (3 колонки по 12 чисел)
        for (let row = 0; row < 12; row++) {
            for (let col = 0; col < 3; col++) {
                const number = row * 3 + (3 - col); // 1,2,3 / 4,5,6 / ...
                const cell = document.createElement('div');
                cell.className = 'bet-cell';
                cell.textContent = number;
                cell.dataset.number = number;
                
                if (this.redNumbers.includes(number)) {
                    cell.classList.add('red');
                } else {
                    cell.classList.add('black');
                }
                
                cell.addEventListener('click', () => this.placeBet(number));
                grid.appendChild(cell);
            }
        }
        
        // Обработчик для зеро
        document.querySelector('.bet-cell.zero').addEventListener('click', () => this.placeBet(0));
    }
    
    startGame() {
        const playerCount = parseInt(document.getElementById('playerCount').value);
        const startingChips = parseInt(document.getElementById('startingChips').value);
        
        if (playerCount < 1 || playerCount > 30) {
            alert('Количество игроков должно быть от 1 до 30');
            return;
        }
        
        if (startingChips < 10 || startingChips % 10 !== 0) {
            alert('Начальное количество фишек должно быть кратно 10');
            return;
        }
        
        // Создаем игроков
        this.players = [];
        for (let i = 1; i <= playerCount; i++) {
            this.players.push({
                id: i,
                name: `Игрок ${i}`,
                chips: startingChips,
                initialChips: startingChips,
                isHuman: i === 1 // Первый игрок - человек
            });
        }
        
        this.currentPlayerIndex = 0;
        this.round = 1;
        this.bets = {};
        this.history = [];
        
        // Переключаем интерфейс
        this.setupSection.style.display = 'none';
        this.gameBoard.style.display = 'block';
        
        this.updateUI();
        this.renderPlayers();
        this.renderLeaderboard();
    }
    
    placeBet(number) {
        if (this.isSpinning) return;
        
        const currentPlayer = this.players[this.currentPlayerIndex];
        
        if (!currentPlayer.isHuman) return; // Только человек может ставить
        
        if (currentPlayer.chips < this.currentBetAmount) {
            alert('Недостаточно фишек!');
            return;
        }
        
        // Добавляем ставку
        if (!this.bets[number]) {
            this.bets[number] = 0;
        }
        this.bets[number] += this.currentBetAmount;
        
        // Списываем фишки
        currentPlayer.chips -= this.currentBetAmount;
        
        // Визуально показываем ставку
        const cell = document.querySelector(`.bet-cell[data-number="${number}"]`);
        cell.classList.add('has-bet');
        
        this.updateUI();
        this.renderPlayers();
        
        // Проверяем, можно ли крутить
        const hasBets = Object.keys(this.bets).length > 0;
        document.getElementById('spinButton').disabled = !hasBets;
    }
    
    spin() {
        if (this.isSpinning || Object.keys(this.bets).length === 0) return;
        
        this.isSpinning = true;
        document.getElementById('spinButton').disabled = true;
        
        // Боты делают ставки
        this.botsPlaceBets();
        
        // Выбираем случайное число
        const winningNumber = this.numbers[Math.floor(Math.random() * this.numbers.length)];
        
        // Анимация вращения
        let rotation = 0;
        const totalRotation = 720 + Math.random() * 360; // 2-3 полных оборота
        const startTime = Date.now();
        const duration = 2000; // 2 секунды
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            rotation = totalRotation * easeOut;
            this.drawWheel(rotation);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.isSpinning = false;
                this.showSpinResult(winningNumber);
            }
        };
        
        animate();
    }
    
    botsPlaceBets() {
        // Боты делают случайные ставки
        this.players.forEach((player, index) => {
            if (!player.isHuman && player.chips >= 5) {
                // Бот ставит 1-3 случайные ставки
                const numBets = Math.floor(Math.random() * 3) + 1;
                
                for (let i = 0; i < numBets; i++) {
                    if (player.chips < 5) break;
                    
                    const randomNum = this.numbers[Math.floor(Math.random() * this.numbers.length)];
                    const betAmount = [5, 10, 25][Math.floor(Math.random() * 3)];
                    
                    if (player.chips >= betAmount) {
                        if (!this.bets[randomNum]) {
                            this.bets[randomNum] = 0;
                        }
                        this.bets[randomNum] += betAmount;
                        player.chips -= betAmount;
                        
                        // Визуально
                        const cell = document.querySelector(`.bet-cell[data-number="${randomNum}"]`);
                        cell.classList.add('has-bet');
                    }
                }
            }
        });
    }
    
    showSpinResult(winningNumber) {
        const color = winningNumber === 0 ? 'green' : 
                     (this.redNumbers.includes(winningNumber) ? 'red' : 'black');
        
        // Определяем winners и losers
        const winners = [];
        const losers = [];
        
        this.players.forEach(player => {
            const playerBets = this.getPlayerBets(player.id);
            let won = 0;
            let lost = 0;
            
            // Считаем выигрыши/проигрыши
            for (const [number, amount] of Object.entries(this.bets)) {
                if (parseInt(number) === winningNumber) {
                    // Выигрыш: ставка * 35 + возврат ставки
                    won += amount * 36;
                } else {
                    lost += amount;
                }
            }
            
            if (won > 0) {
                player.chips += won;
                winners.push({
                    name: player.name,
                    amount: won - lost,
                    isWin: true
                });
            } else {
                losers.push({
                    name: player.name,
                    amount: lost,
                    isWin: false
                });
            }
        });
        
        // Добавляем в историю
        this.history.push({
            number: winningNumber,
            color: color,
            round: this.round
        });
        
        // Показываем результат
        document.getElementById('resultNumber').textContent = `${winningNumber} ${color === 'red' ? '🔴' : color === 'black' ? '⚫' : '🟢'}`;
        document.getElementById('resultColor').textContent = 
            color === 'red' ? 'Красное' : color === 'black' ? 'Черное' : 'Зеро';
        document.getElementById('resultColor').className = `result-color ${color}`;
        
        // Winners & Losers
        const wlContainer = document.getElementById('winnersLosers');
        wlContainer.innerHTML = '';
        
        if (winners.length > 0) {
            const winnersDiv = document.createElement('div');
            winnersDiv.className = 'wl-section winners';
            winnersDiv.innerHTML = '<h4>🏆 Выиграли:</h4>';
            winners.forEach(w => {
                const div = document.createElement('div');
                div.textContent = `${w.name}: +${w.amount}`;
                winnersDiv.appendChild(div);
            });
            wlContainer.appendChild(winnersDiv);
        }
        
        if (losers.length > 0) {
            const losersDiv = document.createElement('div');
            losersDiv.className = 'wl-section losers';
            losersDiv.innerHTML = '<h4>❌ Проиграли:</h4>';
            losers.forEach(l => {
                const div = document.createElement('div');
                div.textContent = `${l.name}: -${l.amount}`;
                losersDiv.appendChild(div);
            });
            wlContainer.appendChild(losersDiv);
        }
        
        this.spinResultModal.style.display = 'block';
        setTimeout(() => this.spinResultModal.classList.add('show'), 10);
        
        // Обновляем UI
        this.updateUI();
        this.renderPlayers();
        this.renderLeaderboard();
        this.renderHistory();
        
        // Очищаем ставки
        this.clearBets();
    }
    
    getPlayerBets(playerId) {
        // Упрощенная версия - все ставки общие
        return this.bets;
    }
    
    closeModal() {
        this.spinResultModal.classList.remove('show');
        setTimeout(() => {
            this.spinResultModal.style.display = 'none';
            
            // Переходим к следующему игроку
            this.nextPlayer();
            
            // Проверяем конец игры
            this.checkGameOver();
        }, 300);
    }
    
    nextPlayer() {
        // Находим следующего игрока с фишками
        let attempts = 0;
        do {
            this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
            attempts++;
        } while (this.players[this.currentPlayerIndex].chips <= 0 && attempts < this.players.length);
        
        // Если круг замкнулся и у текущего игрока нет фишек, игра продолжается с первым у кого есть
        if (this.players[this.currentPlayerIndex].chips <= 0) {
            for (let i = 0; i < this.players.length; i++) {
                if (this.players[i].chips > 0) {
                    this.currentPlayerIndex = i;
                    break;
                }
            }
        }
        
        this.round++;
        this.updateUI();
        this.renderPlayers();
    }
    
    checkGameOver() {
        const activePlayers = this.players.filter(p => p.chips > 0);
        
        // Игра заканчивается если остался один игрок или все проиграли
        if (activePlayers.length <= 1) {
            this.showGameOver(activePlayers[0]);
        }
    }
    
    showGameOver(winner) {
        const modal = document.getElementById('gameOverModal');
        
        if (winner) {
            document.getElementById('finalWinner').innerHTML = `
                <h4>🎉 Победитель: ${winner.name}</h4>
                <p>Осталось фишек: ${winner.chips}</p>
            `;
        } else {
            document.getElementById('finalWinner').innerHTML = '<h4>Все игроки проиграли!</h4>';
        }
        
        // Финальный рейтинг
        const sorted = [...this.players].sort((a, b) => b.chips - a.chips);
        const finalLB = document.getElementById('finalLeaderboard');
        finalLB.innerHTML = '<h4>Финальный рейтинг:</h4>';
        sorted.forEach((p, i) => {
            const div = document.createElement('div');
            div.className = 'leaderboard-item';
            div.innerHTML = `<span class="rank">#${i + 1}</span> <span class="name">${p.name}</span> <span class="chips">${p.chips}</span>`;
            finalLB.appendChild(div);
        });
        
        modal.style.display = 'block';
        setTimeout(() => modal.classList.add('show'), 10);
    }
    
    resetGame() {
        document.getElementById('gameOverModal').classList.remove('show');
        setTimeout(() => {
            document.getElementById('gameOverModal').style.display = 'none';
            this.gameBoard.style.display = 'none';
            this.setupSection.style.display = 'block';
        }, 300);
    }
    
    endGame() {
        const activePlayers = this.players.filter(p => p.chips > 0);
        const winner = activePlayers.reduce((max, p) => p.chips > max.chips ? p : max, activePlayers[0] || null);
        this.showGameOver(winner);
    }
    
    clearBets() {
        this.bets = {};
        document.querySelectorAll('.bet-cell').forEach(cell => {
            cell.classList.remove('has-bet');
        });
        document.getElementById('spinButton').disabled = true;
    }
    
    updateUI() {
        const currentPlayer = this.players[this.currentPlayerIndex];
        document.getElementById('currentRound').textContent = this.round;
        document.getElementById('playersLeft').textContent = this.players.filter(p => p.chips > 0).length;
        document.getElementById('playerChips').textContent = currentPlayer.chips;
        
        // Активный игрок
        document.querySelectorAll('.bet-cell').forEach(cell => {
            cell.style.pointerEvents = currentPlayer.isHuman && !this.isSpinning ? 'auto' : 'none';
            cell.style.opacity = currentPlayer.isHuman && !this.isSpinning ? '1' : '0.7';
        });
    }
    
    renderPlayers() {
        this.playersList.innerHTML = '';
        this.players.forEach((player, index) => {
            const div = document.createElement('div');
            div.className = `player-item ${index === this.currentPlayerIndex ? 'active' : ''} ${player.chips <= 0 ? 'eliminated' : ''}`;
            div.innerHTML = `
                <span class="player-name">${player.name} ${player.isHuman ? '(Вы)' : ''}</span>
                <span class="player-chips">${player.chips}</span>
            `;
            this.playersList.appendChild(div);
        });
    }
    
    renderLeaderboard() {
        const sorted = [...this.players].sort((a, b) => b.chips - a.chips);
        this.leaderboard.innerHTML = '';
        sorted.forEach((player, index) => {
            const div = document.createElement('div');
            div.className = 'leaderboard-item';
            div.innerHTML = `
                <span class="rank">#${index + 1}</span>
                <span class="name">${player.name}</span>
                <span class="chips">${player.chips}</span>
            `;
            this.leaderboard.appendChild(div);
        });
    }
    
    renderHistory() {
        this.historyList.innerHTML = '';
        // Показываем последние 10 спинов
        const recent = this.history.slice(-10).reverse();
        recent.forEach(h => {
            const div = document.createElement('div');
            div.className = `history-item ${h.color}`;
            div.textContent = `${h.number}`;
            this.historyList.appendChild(div);
        });
    }
    
    drawWheel(rotation) {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const radius = Math.min(centerX, centerY) - 10;
        const segmentAngle = (2 * Math.PI) / this.numbers.length;
        
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation * Math.PI / 180);
        
        // Рисуем сегменты
        for (let i = 0; i < this.numbers.length; i++) {
            const number = this.numbers[i];
            const startAngle = i * segmentAngle;
            const endAngle = (i + 1) * segmentAngle;
            
            // Цвет сегмента
            if (number === 0) {
                ctx.fillStyle = '#00ff00'; // Зеленое зеро
            } else if (this.redNumbers.includes(number)) {
                ctx.fillStyle = '#ff0000'; // Красное
            } else {
                ctx.fillStyle = '#000000'; // Черное
            }
            
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fill();
            
            // Граница сегмента
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Текст с номером
            ctx.save();
            ctx.rotate(startAngle + segmentAngle / 2);
            ctx.textAlign = 'right';
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 12px Arial';
            ctx.fillText(number.toString(), radius - 10, 4);
            ctx.restore();
        }
        
        // Внутренний круг
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.3, 0, 2 * Math.PI);
        ctx.fillStyle = '#2D313A';
        ctx.fill();
        ctx.strokeStyle = '#4A5568';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.restore();
        
        // Рисуем указатель
        this.drawPointer();
    }
    
    drawPointer() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const topY = 10;
        
        ctx.beginPath();
        ctx.moveTo(centerX, topY);
        ctx.lineTo(centerX - 10, topY + 20);
        ctx.lineTo(centerX + 10, topY + 20);
        ctx.closePath();
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.strokeStyle = '#4A5568';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

// Инициализация игры при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    window.rouletteGame = new ITRoulette();
});
