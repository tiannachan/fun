// --- 30 個香港擬真地點 ---
const LOCATIONS = [
    { name: "旺角朗豪坊", area: "九龍西", terrain: "平地商場", extraWalk: 2, extraFatigue: 2 },
    { name: "觀塘 APM", area: "九龍東", terrain: "平地工業區", extraWalk: 3, extraFatigue: 3 },
    { name: "中環遮打大廈", area: "港島中環灣仔", terrain: "商業區地鐵直達", extraWalk: 2, extraFatigue: 2 },
    { name: "西環正街半山", area: "港島西", terrain: "長斜路/電梯", extraWalk: 12, extraFatigue: 14 },
    { name: "深水埗基隆街唐樓", area: "九龍西", terrain: "無電梯唐樓6樓", extraWalk: 9, extraFatigue: 18 },
    { name: "慈雲山慈樂邨", area: "九龍東", terrain: "陡峭山路", extraWalk: 15, extraFatigue: 20 },
    { name: "荃灣南豐中心", area: "新界西", terrain: "天橋網絡", extraWalk: 4, extraFatigue: 3 },
    { name: "沙田新城市廣場", area: "新界東", terrain: "大型商場", extraWalk: 5, extraFatigue: 3 },
    { name: "元朗教育路", area: "新界西", terrain: "街邊地舖", extraWalk: 4, extraFatigue: 4 },
    { name: "銅鑼灣時代廣場", area: "港島中環灣仔", terrain: "繁忙商業區", extraWalk: 3, extraFatigue: 4 },
    { name: "尖沙咀海港城", area: "九龍西", terrain: "極大商場迷宮", extraWalk: 8, extraFatigue: 7 },
    { name: "半山花園道豪宅", area: "港島中環灣仔", terrain: "高級半山陡坡", extraWalk: 14, extraFatigue: 18 },
    { name: "藍田平田邨", area: "九龍東", terrain: "山頂屋邨", extraWalk: 12, extraFatigue: 15 },
    { name: "香港科學園", area: "新界東", terrain: "海濱園區大平地", extraWalk: 6, extraFatigue: 4 },
    { name: "屯門市中心", area: "新界西", terrain: "商場天橋連網", extraWalk: 5, extraFatigue: 4 },
    { name: "赤柱大街", area: "港島南", terrain: "遠郊海濱旅遊區", extraWalk: 8, extraFatigue: 8 },
    { name: "大埔墟四里", area: "新界東", terrain: "舊區街市", extraWalk: 5, extraFatigue: 5 },
    { name: "黃大仙下邨", area: "九龍東", terrain: "老牌屋邨斜路", extraWalk: 7, extraFatigue: 9 },
    { name: "數碼港三期", area: "港島南", terrain: "南區偏遠園區", extraWalk: 6, extraFatigue: 5 },
    { name: "將軍澳 PopCorn", area: "將軍澳", terrain: "地鐵上蓋", extraWalk: 2, extraFatigue: 2 },
    { name: "西貢市中心碼頭", area: "新界東", terrain: "遠郊漁港", extraWalk: 6, extraFatigue: 6 },
    { name: "東涌逸東邨", area: "離島", terrain: "離島機場周邊", extraWalk: 7, extraFatigue: 6 },
    { name: "鴨脷洲海怡半島", area: "港島南", terrain: "南區港鐵終點", extraWalk: 4, extraFatigue: 4 },
    { name: "北角春秧街", area: "港島東", terrain: "電車路街市", extraWalk: 4, extraFatigue: 4 },
    { name: "葵芳新都會廣場", area: "新界西", terrain: "地鐵樞紐", extraWalk: 3, extraFatigue: 2 },
    { name: "九龍城獅子石道", area: "九龍中", terrain: "單建舊樓", extraWalk: 5, extraFatigue: 6 },
    { name: "紅磡黃埔花園", area: "九龍中", terrain: "大型屋苑", extraWalk: 4, extraFatigue: 3 },
    { name: "山頂廣場", area: "港島中環灣仔", terrain: "香港最高山頂", extraWalk: 16, extraFatigue: 22 },
    { name: "大圍村屋", area: "新界東", terrain: "鄉村村路", extraWalk: 8, extraFatigue: 7 },
    { name: "太古城中心", area: "港島東", terrain: "中產住宅區", extraWalk: 3, extraFatigue: 2 }
];

function getShortDistrictName(fullName) {
    return fullName.match(/將軍澳|東涌|西貢|屯門|元朗|荃灣|沙田|大圍|大埔|葵芳|北角|太古|銅鑼灣|中環|西環|赤柱|鴨脷洲|數碼港|山頂|觀塘|藍田|黃大仙|慈雲山|九龍城|紅磡|旺角|深水埗|尖沙咀|科學園|半山/)?.[0] || fullName;
}

const ITEM_TYPES = [
    { name: "📄 緊急合約文件", weight: 0.5, needBag: false, needCart: false, penalty: 80, isBlind: false },
    { name: "💊 急救藥物", weight: 0.3, needBag: false, needCart: false, penalty: 110, isBlind: false },
    { name: "🎂 慶生造型蛋糕", weight: 1.8, needBag: true, needCart: false, penalty: 140, isBlind: false },
    { name: "🥩 冰鮮和牛/刺身", weight: 3.5, needBag: true, needCart: false, penalty: 100, isBlind: false },
    { name: "📦 五金建材重物", weight: 14.0, needBag: false, needCart: true, penalty: 160, isBlind: false },
    { name: "☕ 網紅熱咖啡外賣", weight: 1.0, needBag: true, needCart: false, penalty: 60, isBlind: false },
    { name: "❓ 神秘盲盒包裹", weight: 2.5, needBag: false, needCart: false, penalty: 70, isBlind: true },
    { name: "🌸 高級鮮花花束", weight: 1.2, needBag: false, needCart: false, penalty: 90, isBlind: false }
];

const BACKGROUND_PROFILES = [
    { title: "體驗生活的富二代", walletMin: 1200, walletMax: 2500, story: "屋企有幾間鋪，純粹屋企坐得太悶，出嚟跑單當減肥做運動。" },
    { title: "投資失利的前i-Banker", walletMin: 200, walletMax: 600, story: "炒幣槓桿爆倉輸光積蓄，手頭得返幾百蚊，靠步兵重新起家。" },
    { title: "剛畢業待業大專生", walletMin: 50, walletMax: 150, story: "搵咗三個月工都未有Offer，先跑步兵賺取零用錢過度。" },
    { title: "被裁員的IT工程師", walletMin: 300, walletMax: 800, story: "公司大裁員，打算邊跑單邊諗清楚人生方向。" },
    { title: "極度慳錢的退休叔叔", walletMin: 100, walletMax: 400, story: "退休無聊，每日跑幾單順便鍛鍊身體。" },
    { title: "欠下周身債的青年", walletMin: 30, walletMax: 80, story: "戶口得返幾十蚊，第一單連搭地鐵都要精心計算！" }
];

const HEALTH_CONDITIONS = [
    {name: "健康良好",fatigueMultiplier: 1.0,description: "身體狀況正常"},
    {name: "長期缺乏運動",fatigueMultiplier: 1.2,description: "行多兩步已經有啲氣喘"},
    {name: "膝頭舊患",fatigueMultiplier: 1.35,description: "上落樓梯特別吃力"},
    {name: "半馬拉松跑手",fatigueMultiplier: 0.8,description: "體能遠高於一般人"},
    {name: "健身愛好者",fatigueMultiplier: 0.9,description: "平日有恆常訓練"},
    {name: "久坐",fatigueMultiplier: 1.15,description: "體力一般偏差"}
];

const SURNAMES = ["陳", "張", "李", "黃", "劉", "鄭", "梁", "郭", "何", "周", "吳", "朱", "徐", "孫", "馬"];
const GIVEN_NAMES = ["大文", "志豪", "家豪", "阿強", "小明", "美玲", "嘉欣", "子軒", "浩然", "梓軒", "詠詩", "雅婷", "佩珊"];

class Game {
    constructor() {
        this.highScore = parseInt(localStorage.getItem('hk_courier_highscore')) || 0;
        document.getElementById('high-score-display').innerText = `$${this.highScore} 港幣`;
        
        this.timerId = null;
        this.poolInterval = null;
        this.gameLoopInterval = null;
        this.isTimeRunning = true;
        this.historyLog = [];

        if(localStorage.getItem('hk_courier_saved_state')) {
            this.loadState();
        }
    }

    generateCharacterCard() {
        const name = SURNAMES[Math.floor(Math.random()*SURNAMES.length)] + GIVEN_NAMES[Math.floor(Math.random()*GIVEN_NAMES.length)];
        const age = Math.floor(18 + Math.random() * 42);
        const home = LOCATIONS[Math.floor(Math.random()*LOCATIONS.length)].area;
        const profile = BACKGROUND_PROFILES[Math.floor(Math.random()*BACKGROUND_PROFILES.length)];
        const health = HEALTH_CONDITIONS[Math.floor(Math.random()*HEALTH_CONDITIONS.length)];
        const initialWallet = Math.floor(profile.walletMin + Math.random() * (profile.walletMax - profile.walletMin));

        let ageFatigueMultiplier = 1;

        if(age >= 50) ageFatigueMultiplier = 1.15;
        else if(age >= 40) ageFatigueMultiplier = 1.08;
        else if(age <= 25) ageFatigueMultiplier = 0.95; 

        this.tempPlayer = {
            name, age, home,
            money: initialWallet,
            initialMoney: initialWallet,
            story: profile.story,
            title: profile.title,

            healthName: health.name,
            healthDesc: health.description,
            fatigueMultiplier: health.fatigueMultiplier * ageFatigueMultiplier,

            maxWeight: 8
        };

        document.getElementById('card-name').innerText = `👤 ${name} (${age}歲 - ${profile.title})`;
        document.getElementById('card-bg-story').innerText = `「${profile.story}」`;
        document.getElementById('card-home').innerText = home;
        document.getElementById('card-wallet').innerText = `$${initialWallet} 港幣`;
        document.getElementById('card-weight').innerText = `8 kg`;
        
        document.getElementById('screen-start').style.display = 'none';
        document.getElementById('screen-character').style.display = 'flex';
        document.getElementById('card-health').innerText =`${health.name} (${health.description})`;

    }

    startDay() {
        document.getElementById('screen-character').style.display = 'none';
        document.getElementById('main-game').style.display = 'flex';

        this.player = this.tempPlayer;
        this.currentTime = 9 * 60; // 09:00
        this.fatigue = 0;
        this.hunger = 0;
        this.hasBag = false;
        this.hasCart = false;

        this.earnings = 0;
        this.expensesTrans = 0;
        this.expensesFood = 0;
        this.expensesEquip = 0;
        this.penalties = 0;
        this.tips = 0;
        this.completedOrders = 0;
        this.historyLog = [];

        this.availableOrders = [];
        this.currentLocation = LOCATIONS.find(l => l.area === this.player.home) || LOCATIONS[0];

        this.generateOrders(5);
        this.startDynamicPool();
        this.startGameLoop();
        this.saveState();
        this.updateUI();
    }

    //啓動1秒=1分鐘的游戲時鐘
    startGameLoop(){
        if(this.gameLoopInterval) clearInterval(this.gameLoopInterval);
        this.isTimeRunning = true
        this.updateTimeButtonUI();

        this.gameLoopInterval= setInterval(() => {
            if (!this.isTimeRunning) return;

            //1秒增加1分鐘
            this.currentTime += 1;

            //原地休息：疲勞度每秒減少0.5%
            this.fatigue = Math.max(0, this.fatigue - 0.5)

            //時間流逝帶來的輕微飢餓度上升：每秒+0.08%
            this.hunger = Math.min(100, this.hunger + 0.08)

            this.updateUI();
        }, 1000);
    }

    //切換播放/暫停
    toggleTimeLoop() {
        
        if (this.isTimeRunning) {
            // Pause
            this.isTimeRunning = false;

            if (this.poolInterval) {
                clearInterval(this.poolInterval);
                this.poolInterval = null;
            }

            document.getElementById("modal-pause").style.display = "flex";

        } else {

            this.resumeGame();
        }

        this.updateTimeButtonUI();
    }

    resumeGame() {
        this.isTimeRunning = true;
        document.getElementById("modal-pause").style.display = "none";
        this.startDynamicPool();
        this.updateTimeButtonUI();
    }



    //更新暫停按鈕UI狀態
    updateTimeButtonUI(){
        const btn = document.getElementById('btn-toggle-time');
        if(!btn) return;

        if(this.isTimeRunning){
            btn.innerText = "⏸️ 暫停";
            btn.style.background = "var(--primary)";

        } else {
            btn.innerText = "▶️ 已暫停";
            btn.style.background = "var(--success)";
        }
    }

    // 動態訂單池：每 15 秒更新一張單（舊單移除，新單補入）
    startDynamicPool() {
        if(this.poolInterval) clearInterval(this.poolInterval);
        this.poolInterval = setInterval(() => {
            if (this.availableOrders.length >= 6) {
                this.availableOrders.shift(); // 移除最舊的單
            }
            this.generateOrders(1);
            this.updateUI();
        }, 15000);
    }

    generateOrders(count) {
        for(let i=0; i<count; i++) {
            const pickup = LOCATIONS[Math.floor(Math.random()*LOCATIONS.length)];
            let target = LOCATIONS[Math.floor(Math.random()*LOCATIONS.length)];
            while(target.name === pickup.name) target = LOCATIONS[Math.floor(Math.random()*LOCATIONS.length)];

            const item = ITEM_TYPES[Math.floor(Math.random()*ITEM_TYPES.length)];
            const isCrossHarbor = pickup.area !== target.area;
            let basePay = Math.floor(35 + (isCrossHarbor ? 35 : 12) + item.weight * 3.5 + Math.random() * 25);

            this.availableOrders.push({
                id: Math.random().toString(36).substr(2, 9),
                pickup,
                target,
                item,
                pay: basePay
            });
        }
    }

    // 依距離排序算法 (主角當前位置優先 -> 同區優先 -> 跨區最後)
    sortOrdersByDistance() {
        const curLoc = typeof this.currentLocation === 'string' 
            ? LOCATIONS.find(l => l.name === this.currentLocation) || LOCATIONS[0] 
            : this.currentLocation;

        this.availableOrders.sort((a, b) => {
            const getScore = (ord) => {
                if (ord.pickup.name === curLoc.name) return 0; // 原地起點第一優先
                if (ord.pickup.area === curLoc.area) return 1; // 同區域第二優先
                return 2; // 跨區排最後
            };
            return getScore(a) - getScore(b);
        });
    }

    updateUI() {
        const curLocObj = typeof this.currentLocation === 'string' ? LOCATIONS.find(l => l.name === this.currentLocation) : this.currentLocation;
        const curLocName = curLocObj ? curLocObj.name : this.currentLocation;

        document.getElementById('p-name').innerText = `👤 ${this.player.name} (${this.player.title})`;
        document.getElementById('p-home').innerText = this.player.home;
        document.getElementById('p-money').innerText = `$${this.player.money}`;
        document.getElementById('p-loc').innerText = curLocName;

        let equipText = "基本背包 (8kg)";
        if(this.hasBag && this.hasCart) equipText = "保溫袋 + 手推車 (23kg)";
        else if(this.hasBag) equipText = "保溫袋 (8kg)";
        else if(this.hasCart) equipText = "手推車 (23kg)";
        document.getElementById('p-equip').innerText = equipText;

        const hrs = Math.floor(this.currentTime / 60).toString().padStart(2, '0');
        const mins = (this.currentTime % 60).toString().padStart(2, '0');
        document.getElementById('txt-time').innerText = `${hrs}:${mins}`;
        
        const timePercent = Math.min(100, ((this.currentTime - 540) / (13 * 60)) * 100);
        document.getElementById('bar-time').style.width = `${timePercent}%`;
        document.getElementById('bar-fatigue').style.width = `${this.fatigue}%`;
        document.getElementById('txt-fatigue').innerText = `${Math.floor(this.fatigue)}%`;
        document.getElementById('bar-hunger').style.width = `${this.hunger}%`;
        document.getElementById('txt-hunger').innerText = `${Math.floor(this.hunger)}%`;

        document.getElementById('btn-bag').disabled = this.hasBag || this.player.money < 80;
        document.getElementById('btn-cart').disabled = this.hasCart || this.player.money < 200;

        // 依據距離排序單池
        this.sortOrdersByDistance();

        // 渲染單池
        const listEl = document.getElementById('orders-list');
        listEl.innerHTML = "";

        this.availableOrders.forEach((ord) => {
            const isHere = ord.pickup.name === curLocName;
            const isSameZone = ord.pickup.area === (curLocObj ? curLocObj.area : '');
            
            const shortPickup = getShortDistrictName(ord.pickup.name);
            const shortTarget = getShortDistrictName(ord.target.name);

            const card = document.createElement('div');
            card.className = "order-card";
            card.innerHTML = `
                <div class="route-header">
                    <span class="route-path">📍 ${shortPickup} ➔ 🏁 ${shortTarget}</span>
                    <span style="color:var(--success); font-weight:bold;">+$${ord.pay}</span>
                </div>
                <div style="font-size:12px; color:var(--text-sub); margin:4px 0;">
                    ${isHere ? '<b style="color:var(--primary);">[就在此處!]</b> ' : (isSameZone ? '<b style="color:#0288d1;">[同區域]</b> ' : '')}
                    地形: <b>${ord.target.terrain}</b> (下車步行 ${ord.target.extraWalk} 分鐘)
                </div>
                <div class="item-tag">
                    📦 物品: ${ord.item.isBlind ? "❓ 神秘盲盒" : ord.item.name} (${ord.item.weight}kg)
                </div>
                <button style="width:100%; margin-top:8px;" onclick="game.acceptOrder('${ord.id}')">接單並前往取貨</button>
            `;
            listEl.appendChild(card);
        });

        // 渲染今日歷史紀錄 Block
        this.renderHistoryLog();

        this.updateTimeButtonUI(); //確保每次UI更新時同步刷新暫停/播放按鈕的狀態
        if(this.fatigue >= 100) this.endGame("疲勞過度在街頭暈倒被送院！");
        if(this.currentTime >= 22 * 60) this.endGame("時間到達 22:00 晚間，強制收工");
    }

    renderHistoryLog() {
        const logContainer = document.getElementById('history-log-list');
        document.getElementById('log-count').innerText = this.historyLog.length;

        if (this.historyLog.length === 0) {
            logContainer.innerHTML = `<div style="color:var(--text-sub); text-align:center; font-size:12px; padding:10px;">今天還沒有完成任何訂單</div>`;
            return;
        }

        logContainer.innerHTML = "";
        this.historyLog.slice().reverse().forEach(log => {
            const item = document.createElement('div');
            item.className = "history-item";
            item.innerHTML = `
                <div class="history-item-header">
                    <span>${log.pickup} ➔ ${log.target}</span>
                    <span style="color:var(--success);">+${log.earned}</span>
                </div>
                <div class="history-item-details">
                    <span>📦 ${log.itemName}</span>
                    <span>🚌 車費: $${log.transCost} | ⏱️ 耗時: ${log.timeSpent}分</span>
                </div>
            `;
            logContainer.appendChild(item);
        });
    }

    // 依 ID 尋找單，修復按鈕無反應問題
    acceptOrder(orderId) {
        const order = this.availableOrders.find(o => o.id === orderId);
        if(!order) {
            alert("⚠️ 該訂單已被其他外賣員搶走了！");
            this.updateUI();
            return;
        }

        const maxW = this.player.maxWeight + (this.hasCart ? 15 : 0);
        if(order.item.weight > maxW) {
            alert(`⚠️ 拿不動！物品重 ${order.item.weight}kg，超過你的最大負重 ${maxW}kg (可購買手推車提升)。`);
            return;
        }

        this.selectedOrder = order;
        this.currentDeliveryTransCost = 0;
        this.currentDeliveryTimeSpent = 0;
        
        // 觸發 20 秒倒數計時
        this.showTransportModal(order.pickup, "取貨");
    }

    showTransportModal(destination, stage) {
        const realisticDelay = Math.floor(Math.random() * 11) + 10; // 10-20 mins
        const modal = document.getElementById('modal-transport');
        const info = document.getElementById('transport-info');
        const optionsEl = document.getElementById('transport-options');
        
        const curLocObj = typeof this.currentLocation === 'string' ? LOCATIONS.find(l => l.name === this.currentLocation) : this.currentLocation;
        const curLocName = curLocObj ? curLocObj.name : "目前位置";

        const pickupDetail = this.selectedOrder ? this.selectedOrder.pickup.name : curLocName;
        const targetDetail = this.selectedOrder ? this.selectedOrder.target.name : destination.name;
        const orderPay = this.selectedOrder ? this.selectedOrder.pay : 0;

        info.innerHTML = `
            <div style = "background:#f0f0f2; padding 8px 10px; border-radius:8px; margin-bottom:12px; border:1px solid #e0e0e0; color:#333;">
                <b>📍 目前位置：</b>${curLocName}<br>    
                <b>📦 取貨地點：</b>${pickupDetail}<br>
                <b>🏁 送貨地點：</b>${targetDetail}<br>
                <b>💰 訂單報酬：</b><span style ="color:var(--success); font-weight:bold;">+$${orderPay} 港幣</span>
            </div>
            <div style = "color:var(--primary); font-weight:bold; margin-bottom:4px;">
                目前階段：【${stage}】（前往：${destination.name}）
            </div>
        `;
        optionsEl.innerHTML = "";

        // 啟動 20 秒倒數
        this.startTransportCountdown();

        const isExactSameLocation = curLocObj && (curLocObj.name === destination.name);
        const isSameArea = curLocObj && (curLocObj.area === destination.area);
        const isCrossHarbor = curLocObj && (curLocObj.area !== destination.area);

        let walkBaseTime = isExactSameLocation ? 2 : (isSameArea ? 15 : 38);
        let mtrBaseTime = isExactSameLocation ? 2 : (isSameArea ? 10 : 18);
        let busBaseTime = isExactSameLocation ? 2 : (isSameArea ? 12 : 25);

        const extraWalkTime = isExactSameLocation ? 0 : destination.extraWalk;
        const extraFatigueVal = isExactSameLocation ? 0 : destination.extraFatigue;

        const transports = [
            { 
                name: isExactSameLocation ? "🚶 就在原地/順路拿貨" : "🚶 步行走路", 
                cost: 0, 
                time: walkBaseTime + extraWalkTime + realisticDelay, 
                fatigue: (isExactSameLocation ? 1 : 12) + extraFatigueVal 
            },
            { 
                name: "🚇 港鐵 MTR", 
                cost: isExactSameLocation ? 0 : (isCrossHarbor ? 14.5 : 6.5), 
                time: mtrBaseTime + extraWalkTime + realisticDelay, 
                fatigue: 4 + extraFatigueVal 
            },
            { 
                name: "🚌 九巴/城巴 Bus", 
                cost: isExactSameLocation ? 0 : (isCrossHarbor ? 11.2 : 5.8), 
                time: busBaseTime + extraWalkTime + realisticDelay, 
                fatigue: 5 + extraFatigueVal 
            },
            { 
                name: "🚐 綠色小巴", 
                cost: isExactSameLocation ? 0 : 7.5, 
                time: (isSameArea ? 12 : 20) + extraWalkTime + realisticDelay, 
                fatigue: 6 + extraFatigueVal, 
                disabled: this.hasCart 
            },
            { 
                name: "🚋 電車 / 輕鐵", 
                cost: isExactSameLocation ? 0 : 3.0, 
                time: (isSameArea ? 20 : 40) + extraWalkTime + realisticDelay, 
                fatigue: 7 + extraFatigueVal 
            },
            { 
                name: "🚕 的士 Taxi", 
                cost: isExactSameLocation ? 0 : (isCrossHarbor ? 95.0 : 45.0), 
                time: isExactSameLocation ? 2 : 10 + realisticDelay, 
                fatigue: 1 
            }
        ];

        transports.forEach(t => {
            const opt = document.createElement('div');
            opt.className = "transport-option";
            opt.innerHTML = `
                <div>
                    <strong>${t.name}</strong> ${t.disabled ? '<span style="color:red;">(推車無法上車)</span>' : ''}<br>
                    <small>車費: $${t.cost} | 時間: ~${t.time}分鐘 | 疲勞: +${t.fatigue}%</small>
                </div>
                <button ${t.disabled || this.player.money < t.cost ? 'disabled' : ''} onclick="game.executeTravel('${stage}', ${t.cost}, ${t.time}, ${t.fatigue}, '${destination.name}')">選擇</button>
            `;
            optionsEl.appendChild(opt);
        });

        modal.style.display = "flex";
    }

    // 20 秒倒數控制
        // 20 秒倒數控制（含動態進度條動畫）
    startTransportCountdown() {
        if(this.timerId) clearInterval(this.timerId);
        let timeLeft = 20;
        const timerEl = document.getElementById('countdown-timer');
        const timerBarEl = document.getElementById('timer-bar-fill');
        
        timerEl.innerText = `⏱️ ${timeLeft}s`;
        if (timerBarEl) timerBarEl.style.width = `100%`;

        this.timerId = setInterval(() => {
            timeLeft--;
            timerEl.innerText = `⏱️ ${timeLeft}s`;
            
            // 計算並更新進度條寬度百分比
            if (timerBarEl) {
                const percentage = (timeLeft / 20) * 100;
                timerBarEl.style.width = `${percentage}%`;
            }

            if (timeLeft <= 0) {
                clearInterval(this.timerId);
                this.cancelTransportSelection('逾時未選擇交通，訂單已失效！');
            }
        }, 1000);
    }

    cancelTransportSelection(msg, silent = false) {
        if(this.timerId) clearInterval(this.timerId);
        document.getElementById('modal-transport').style.display = "none";
        if(!silent){
            alert(`⚠️ ${msg}`);
        }
        this.selectedOrder = null;
        this.updateUI();
    }

    executeTravel(stage, cost, time, fatigue, newLocName) {
        if(this.timerId) clearInterval(this.timerId);
        document.getElementById('modal-transport').style.display = "none";

        this.player.money -= cost;
        this.expensesTrans += cost;
        this.currentTime += time;
        this.fatigue += fatigue * this.player.fatigueMultiplier;
        this.hunger += time * 0.12;

        this.currentDeliveryTransCost += cost;
        this.currentDeliveryTimeSpent += time;

        this.currentLocation = LOCATIONS.find(l => l.name === newLocName) || newLocName;

        if(stage === "取貨") {
            // 從可用訂單池中移除此單
            const orderIndex = this.availableOrders.findIndex(o => o.id === this.selectedOrder.id);
            if(orderIndex !== -1) this.availableOrders.splice(orderIndex, 1);

            alert(`📍 你順利到達【${newLocName}】拿到貨物！現在選擇交通工具送往目的地...`);
            this.showTransportModal(this.selectedOrder.target, "送貨");
        } else if(stage === "送貨") {
            this.completeDelivery();
        }

        this.saveState();
        this.updateUI();
    }

    completeDelivery() {
        const ord = this.selectedOrder;
        let finalPay = ord.pay;
        let isDamaged = false;

        if(ord.item.needBag && !this.hasBag) {
            isDamaged = true;
            alert(`⚠️ 糟糕！【${ord.item.name}】因沒有保溫袋保護而損壞！被扣除賠償罰款 $${ord.item.penalty}`);
            this.player.money -= ord.item.penalty;
            this.penalties += ord.item.penalty;
            finalPay = 0;
        }

        if(!isDamaged) {
            const getTip = Math.random() < 0.35;
            const tipAmt = getTip ? Math.floor(10 + Math.random()*20) : 0;
            const totalEarned = finalPay + tipAmt;

            this.player.money += totalEarned;
            this.earnings += finalPay;
            this.tips += tipAmt;
            this.completedOrders++;

            // 記錄至歷史 Log
            this.historyLog.push({
                pickup: ord.pickup.name,
                target: ord.target.name,
                itemName: ord.item.name,
                earned: totalEarned,
                transCost: this.currentDeliveryTransCost,
                timeSpent: this.currentDeliveryTimeSpent
            });

            alert(`✅ 成功送達【${ord.target.name}】！獲得運費 $${finalPay} ${tipAmt > 0 ? ` + 顧客滿意小費 $${tipAmt}！` : ''}`);
        }

        this.saveState();
        this.updateUI();
    }

    rest() {
        this.currentTime += 15;
        this.fatigue = Math.max(0, this.fatigue - 15);
        this.hunger += 3;
        alert("你在公園長椅休息了 15 分鐘，體力稍有恢復。");
        this.saveState();
        this.updateUI();
    }

    eat() {
        if(this.player.money < 55) {
            alert("你連 $55 港幣的茶餐廳都食唔起！快去跑單吧！");
            return;
        }
        this.player.money -= 55;
        this.expensesFood += 55;
        this.currentTime += 30;
        this.hunger = Math.max(0, this.hunger - 50);
        this.fatigue = Math.max(0, this.fatigue - 10);
        alert("你在茶餐廳食咗熱辣辣的冰室套餐，大復原！");
        this.saveState();
        this.updateUI();
    }

    // 買東西只扣錢與更新裝備，不刷新訂單池
    buyItem(type) {
        if(type === 'bag' && this.player.money >= 80) {
            this.player.money -= 80;
            this.expensesEquip += 80;
            this.hasBag = true;
            alert("你解鎖了專業外賣保溫袋！現在可以送蛋糕與生鮮冰品了！");
        } else if(type === 'cart' && this.player.money >= 200) {
            this.player.money -= 200;
            this.expensesEquip += 200;
            this.hasCart = true;
            alert("你購買了便攜手推車！負重上限提升至 23kg！");
        }
        this.saveState();
        this.updateUI();
    }

    endGame(reason) {
        if(this.timerId) clearInterval(this.timerId);
        if(this.poolInterval) clearInterval(this.poolInterval);
        localStorage.removeItem('hk_courier_saved_state');

        const netProfit = (this.earnings + this.tips) - this.expensesTrans - this.expensesFood - this.expensesEquip - this.penalties;
        
        if(netProfit > this.highScore) {
            this.highScore = netProfit;
            localStorage.setItem('hk_courier_highscore', this.highScore);
        }

        let title = "初出茅廬步兵";
        if(netProfit > 400) title = "香港過海鐵腿王 🏆";
        else if(netProfit > 200) title = "精明接單大師 🎒";
        else if(netProfit < 0) title = "破產外賣員 💸";

        const reportHtml = `
            <p style="color:var(--primary); text-align:center;"><strong>結束原因: ${reason}</strong></p>
            <div class="report-row"><span>主角稱號</span><strong style="color:var(--primary);">${title}</strong></div>
            <div class="report-row"><span>初始個人錢包</span><strong>$${this.player.initialMoney}</strong></div>
            <div class="report-row"><span>今日完成訂單</span><strong>${this.completedOrders} 單</strong></div>
            <div class="report-row"><span>送貨運費總收入</span><span style="color:var(--success);">+$${this.earnings}</span></div>
            <div class="report-row"><span>顧客小費總額</span><span style="color:var(--success);">+$${this.tips}</span></div>
            <div class="report-row"><span>交通費支出</span><span style="color:var(--danger);">-$${this.expensesTrans}</span></div>
            <div class="report-row"><span>伙食費支出</span><span style="color:var(--danger);">-$${this.expensesFood}</span></div>
            <div class="report-row"><span>裝備投資費</span><span style="color:var(--danger);">-$${this.expensesEquip}</span></div>
            <div class="report-row"><span>壞貨賠償罰款</span><span style="color:var(--danger);">-$${this.penalties}</span></div>
            <hr style="border-color:#eee;">
            <div class="report-row">
                <span>單日送貨淨利潤</span>
                <strong style="font-size:18px; color:${netProfit>=0 ? 'var(--success)' : 'var(--danger)'};">$${netProfit} 港幣</strong>
            </div>
            <div class="report-row">
                <span>歷史最高紀錄 (High Score)</span>
                <strong style="font-size:18px; color:var(--primary);">$${this.highScore} 港幣</strong>
            </div>
        `;

        document.getElementById('report-details').innerHTML = reportHtml;
        document.getElementById('modal-report').style.display = "flex";
    }

    restartNewGame() {
        document.getElementById('modal-report').style.display = "none";
        document.getElementById('main-game').style.display = "none";
        document.getElementById('high-score-display').innerText = `$${this.highScore} 港幣`;
        document.getElementById('screen-start').style.display = "flex";
    }

    resetGameConfirm() {
        if(confirm("確定要重置目前的遊戲進度嗎？")) {
            if(this.timerId) clearInterval(this.timerId);
            if(this.poolInterval) clearInterval(this.poolInterval);
            localStorage.removeItem('hk_courier_saved_state');
            this.restartNewGame();
        }
    }

    saveState() {
        const state = {
            player: this.player,
            currentTime: this.currentTime,
            fatigue: this.fatigue,
            hunger: this.hunger,
            hasBag: this.hasBag,
            hasCart: this.hasCart,
            earnings: this.earnings,
            expensesTrans: this.expensesTrans,
            expensesFood: this.expensesFood,
            expensesEquip: this.expensesEquip,
            penalties: this.penalties,
            tips: this.tips,
            completedOrders: this.completedOrders,
            currentLocation: this.currentLocation,
            availableOrders: this.availableOrders,
            historyLog: this.historyLog
        };
        localStorage.setItem('hk_courier_saved_state', JSON.stringify(state));
    }

    loadState() {
        try {
            const state = JSON.parse(localStorage.getItem('hk_courier_saved_state'));
            if(!state) return;

            this.player = state.player;
            this.currentTime = state.currentTime;
            this.fatigue = state.fatigue;
            this.hunger = state.hunger;
            this.hasBag = state.hasBag;
            this.hasCart = state.hasCart;
            this.earnings = state.earnings;
            this.expensesTrans = state.expensesTrans;
            this.expensesFood = state.expensesFood;
            this.expensesEquip = state.expensesEquip;
            this.penalties = state.penalties;
            this.tips = state.tips;
            this.completedOrders = state.completedOrders;
            this.currentLocation = state.currentLocation;
            this.availableOrders = state.availableOrders;
            this.historyLog = state.historyLog || [];

            document.getElementById('screen-start').style.display = 'none';
            document.getElementById('main-game').style.display = 'flex';
            
            this.startDynamicPool();
            this.updateUI();
        } catch(e) {
            localStorage.removeItem('hk_courier_saved_state');
        }
    }
}

// 啟動遊戲
const game = new Game();
