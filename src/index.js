// ポイント管理（初期値）
let points = { A: 0, B: 0, C: 0 };
let currentScreenIndex = 0;

// 各配列で各質問の情報を管理

// タイトル：章の名前
const chapters = [
    "第一章「久しぶりに...」",
    "第二章「LINEにて」",
    "第三章「初デート」",
    "第四章「どれを着ていこうかな」",
    "第五章「何食べよっか」",
    "第六章「お会計」",
    "第七章「二人きりの場所で」",
    "第八章「君に届け」"
];

// 説明：問題文
const questions = [
    "亀井百合（あなた）は放課後、中学時代の友達で、野球部の憲伸を見つけた。声をかけてみようかな？",
    "家に帰った百合は、さっき会った石橋くんからLINEが来ていることに気づいた。なんて返信しようかな。",
    "あれからLINEで少し話した百合は、憲伸に遊びに誘われた。どこに行こうかな",
    "憲伸と遊びに行くことになった百合は、何を着ようか悩んでいる。",
    "デートに出かけた百合と憲伸。そろそろおなかも空いてきたね、何を食べる？",
    "いっぱい食べちゃったけど...お会計どうしよう？",
    "この後、二人でどこに行こうかな",
    "静寂の中、あなたは憲伸に想いを伝える..."
];

// 画像：初期で出る画像
const images = [
    "../image/before1.jpg",
    "../image/before2.jpg",
    "../image/before3.jpg",
    "../image/before4.jpeg",
    "../image/before5.jpeg",
    "../image/before6.jpg",
    "../image/before7.webp",
    "../image/before8.jpeg"
];

// 選択肢：選択肢の名称と、出てくる画像たち
const options = [
    // 第一章
    [
        // 選択肢A
        {
            text: "目を合わせる",
            aPoints: 0,
            bPoints: 0,
            cPoints: 0,
            message: "選択肢Aを選びました！",
            imageAfter: "../image/afterA1.jpg"
        },
        // 選択肢B
        {
            text: "声をかけてバイバイ",
            aPoints: 5,
            bPoints: 0,
            cPoints: 0,
            message: "選択肢Bを選びました！",
            imageAfter: "../image/afterB1.jpg"
        },
        // 選択肢C
        {
            text: "声をかけて一緒に帰る",
            aPoints: 10,
            bPoints: 10,
            cPoints: 10,
            message: "選択肢Cを選びました！",
            imageAfter: "../image/afterC1.jpg"
        }
    ],

    // 第二章
    [
        // 選択肢A
        {
            text: "「だから何？」",
            aPoints: 0,
            bPoints: 5,
            cPoints: 0,
            message: "選択肢Aを選びました！",
            imageAfter: "../image/afterA2.jpg"
        },
        // 選択肢B
        {
            text: "「会っちゃったね」",
            aPoints: 5,
            bPoints: 0,
            cPoints: 0,
            message: "選択肢Bを選びました！",
            imageAfter: "../image/afterB2.jpg"
        },
        // 選択肢C
        {
            text: "「久しぶりに会えて嬉しかったよ」",
            aPoints: 10,
            bPoints: 10,
            cPoints: 10,
            message: "選択肢Cを選びました！",
            imageAfter: "../image/afterC2.jpg"
        }
    ],

    // 第三章
    [
        // 選択肢A
        {
            text: "映画館",
            aPoints: 5,
            bPoints: 10,
            cPoints: 15,
            message: "選択肢Aを選びました！",
            imageAfter: "../image/afterA3.jpg"
        },
        // 選択肢B
        {
            text: "遊園地",
            aPoints: 5,
            bPoints: 0,
            cPoints: 0,
            message: "選択肢Bを選びました！",
            imageAfter: "../image/afterB3.jpg"
        },
        // 選択肢C
        {
            text: "おうち",
            aPoints: 15,
            bPoints: 0,
            cPoints: 0,
            message: "選択肢Cを選びました！",
            imageAfter: "../image/afterC3.jpg"
        }
    ],

    // 第四章
    [
        // 選択肢A
        {
            text: "ジャージ（全身）",
            aPoints: 0,
            bPoints: 5,
            cPoints: 5,
            message: "選択肢Aを選びました！",
            imageAfter: "../image/afterA4.jpg"
        },
        // 選択肢B
        {
            text: "オフショル& ショートパンツ",
            aPoints: 10,
            bPoints: 5,
            cPoints: 0,
            message: "選択肢Bを選びました！",
            imageAfter: "../image/afterB4.jpg"
        },
        // 選択肢C
        {
            text: "ロングスカート& カーディガン",
            aPoints: 15,
            bPoints: 10,
            cPoints: 0,
            message: "選択肢Cを選びました！",
            imageAfter: "../image/afterC4.jpg"
        }
    ],

    // 第五章
    [
        // 選択肢A
        {
            text: "イタリアン",
            aPoints: 10,
            bPoints: 10,
            cPoints: 10,
            message: "選択肢Aを選びました！",
            imageAfter: "../image/afterA5.jpeg"
        },
        // 選択肢B
        {
            text: "ファストフード",
            aPoints: 0,
            bPoints: 0,
            cPoints: 5,
            message: "選択肢Bを選びました！",
            imageAfter: "../image/afterB5.jpeg"
        },
        // 選択肢C
        {
            text: "ラーメン",
            aPoints: 10,
            bPoints: 0,
            cPoints: 0,
            message: "選択肢Cを選びました！",
            imageAfter: "../image/afterC5.jpeg"
        }
    ],

    // 第六章
    [
        // 選択肢A
        {
            text: "奢ってもらう",
            aPoints: 5,
            bPoints: 5,
            cPoints: 5,
            message: "選択肢Aを選びました！",
            imageAfter: "../image/before6.jpg"
        },
        // 選択肢B
        {
            text: "割り勘",
            aPoints: 10,
            bPoints: 10,
            cPoints: 15,
            message: "選択肢Bを選びました！",
            imageAfter: "../image/before6.jpg"
        },
        // 選択肢C
        {
            text: "奢る",
            aPoints: 10,
            bPoints: 10,
            cPoints: 10,
            message: "選択肢Cを選びました！",
            imageAfter: "../image/before6.jpg"
        }
    ],

    // 第七章
    [
        // 選択肢A
        {
            text: "公園に行く",
            aPoints: 5,
            bPoints: 5,
            cPoints: 5,
            message: "選択肢Aを選びました！",
            imageAfter: "../image/afterA7.jpeg"
        },
        // 選択肢B
        {
            text: "海辺をおさんぽ",
            aPoints: 10,
            bPoints: 10,
            cPoints: 5,
            message: "選択肢Bを選びました！",
            imageAfter: "../image/afterB7.jpg"
        },
        // 選択肢C
        {
            text: "夜景を見に行く",
            aPoints: 10,
            bPoints: 5,
            cPoints: 5,
            message: "選択肢Cを選びました！",
            imageAfter: "../image/afterC7.jpg"
        }
    ],

    // 第八章
    [
        // 選択肢A
        {
            text: "あなたのすべてを、一つ残らず食べ尽くしたいな。あなたが私の一部になる瞬間を、ずっと想像しているの....。",
            aPoints: -100,
            bPoints: -100,
            cPoints: -100,
            message: "選択肢Aを選びました！",
            imageAfter: "../image/afterA8.jpg"
        },
        // 選択肢B
        {
            text: "私と結婚してください",
            aPoints: -10,
            bPoints: -10,
            cPoints: -10,
            message: "選択肢Bを選びました！",
            imageAfter: "../image/afterB8.jpeg"
        },
        // 選択肢C
        {
            text: "好きです、付き合ってください！",
            aPoints: 10,
            bPoints: 10,
            cPoints: 10,
            message: "選択肢Cを選びました！",
            imageAfter: "../image/afterC8.jpeg"
        }
    ]
];

const nextButtonTexts = [
    "家に帰ろう",
    "久しぶりに少し話そう...",
    "遊びに行こう",
    "似合ってるかな...？",
    "美味しかった！",
    "ごちそうさまでした！",
    "想いを伝えよう...",
    "...."
];

const nextScreens = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    "result"
];

// フッターの更新（ポイント表示）
function updateFooter() {
    document.getElementById("footer").innerText =
        `現在のポイント: 積極度[ ${points.A} ] | 好感度[ ${points.B} ] | 信頼度[ ${points.C} ]`;
}

// 進行度表示の更新
function updateProgressIndicator() {
    const progressIndicator = document.getElementById("progressIndicator");

    let current = currentScreenIndex + 1;
    let total = chapters.length; // 8問
    let progress = "進行度：";

    for (let i = 0; i < current; i++) {
        progress += "🟩";
    }

    for (let i = current; i < total; i++) {
        progress += "⬛️";
    }

    progressIndicator.innerText = progress;
}

// 各配列を使って画面を描画
function renderScreen(index) {
    const gameDiv = document.getElementById("game");
    gameDiv.innerHTML = "";

    // 最終画面の場合は result.html へGO
    if (index === "result") {
        location.href = "result.html";
        return;
    }

    currentScreenIndex = index;

    let html = `<h1>${chapters[index]}</h1>`;
    html += `<p id="question-text">${questions[index]}</p>`;
    html += `<img id="question-image" src="${images[index]}" alt="質問画像">`;

    // 各選択肢ボタン
    options[index].forEach((option, i) => {
        html += `<button id="option${i}" onclick="handleChoice(${option.aPoints}, ${option.bPoints}, ${option.cPoints}, '${option.message}', '${option.imageAfter}')">
                                ${option.text}
                             </button>`;
    });

    // 次へ進むボタン
    html += `<button id="next-button" style="display:none;" onclick="goToNextScreen('${nextScreens[index]}')">
                            ${nextButtonTexts[index]}
                         </button>`;

    gameDiv.innerHTML = html;
    updateFooter();
    updateProgressIndicator();
}

// 選択肢クリック時の処理
function handleChoice(aPoints, bPoints, cPoints, message, newImage) {
    points.A += aPoints;
    points.B += bPoints;
    points.C += cPoints;

    document.getElementById("question-text").innerText = message;
    document.getElementById("question-image").src = newImage;

    // 選択肢ボタンを無効化
    const opts = document.querySelectorAll('#game button[id^="option"]');
    opts.forEach(function(button) {
        button.disabled = true;
        button.classList.add("disabled");
    });

    // 次へ進むボタン表示
    document.getElementById("next-button").style.display = "block";
    updateFooter();
}

// 次の画面へ
function goToNextScreen(nextScreen) {
    // 次へ進むボタンを押したときにポイントを必ず保存
    localStorage.setItem("points", JSON.stringify(points));
    if (nextScreen === "result") {
        location.href = "result.html";
    } else {
        renderScreen(Number(nextScreen));
    }
}

// ゲームリセット
function resetGame() {
    points = { A: 0, B: 0, C: 0 };
    renderScreen(0);
}

document.addEventListener("DOMContentLoaded", function() {
    renderScreen(0);
});