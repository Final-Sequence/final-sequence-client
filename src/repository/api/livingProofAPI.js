class LivingProofAPI {
  static async fetchLivingProofList() {
    return [{
      id: 0,
      name: "塚原宥誼",
      faceImageURL: "https://final-sequence-test-resource.s3.ap-northeast-1.amazonaws.com/living-proof/persons/tsukahara.png",
      motto: "プロは言い分けは言わない",
      status: "存命",
      age: 75,
      occupation: "町工場経営"
    },
      {
        id: 1,
        name: "塚原宥誼",
        faceImageURL: "https://final-sequence-test-resource.s3.ap-northeast-1.amazonaws.com/living-proof/persons/tsukahara.png",
        motto: "プロは言い分けは言わない",
        status: "存命",
        age: 75,
        occupation: "町工場経営"
      },
      {
        id: 2,
        name: "塚原宥誼",
        faceImageURL: "https://final-sequence-test-resource.s3.ap-northeast-1.amazonaws.com/living-proof/persons/tsukahara.png",
        motto: "プロは言い分けは言わない",
        status: "存命",
        age: 75,
        occupation: "町工場経営"
      },
      {
        id: 3,
        name: "塚原宥誼",
        faceImageURL: "https://final-sequence-test-resource.s3.ap-northeast-1.amazonaws.com/living-proof/persons/tsukahara.png",
        motto: "プロは言い分けは言わない",
        status: "存命",
        age: 75,
        occupation: "町工場経営"
      },
      {
        id: 4,
        name: "塚原宥誼",
        faceImageURL: "https://final-sequence-test-resource.s3.ap-northeast-1.amazonaws.com/living-proof/persons/tsukahara.png",
        motto: "プロは言い分けは言わない",
        status: "存命",
        age: 75,
        occupation: "町工場経営"
      }]
  }

  static async fetchLivingProofDetail(id) {
    return {
      id: id,
      name: "塚原宥誼",
      faceImageURL: "https://final-sequence-test-resource.s3.ap-northeast-1.amazonaws.com/living-proof/persons/tsukahara.png",
      motto: "プロは言い分けは言わない",
      status: "存命",
      age: 75,
      occupation: "町工場経営",
      birthday: "1943年11月15日",
      nickname: "おとうさん、お父様",
      height: "178",
      weight: "75",
      birthplace: "東京都大田区",
      livedPlace: "東京、栃木",
      whereBeen: "色々",
      academicBackground: "パチンコ大学",
      personality: "しつこい",
      firstLove: "15歳",
      numberInRelationship: "3人",
      childhoodLonging: "寿司屋",
      jobTried: "八百屋、ビルの清掃",
      goodAt: "実験",
      badAt: "話を簡潔に終わらせること",
      favoriteFood: "おばあちゃんの料理",
      dislikeFood: "油っこいもの",
      boast: "特許をいっぱい取得した",
      hobby: "散歩",
      numberDescendants: "子供3人、孫7人",
      predictingDeathCause: "ガン",
      desiredOffering: "いらない",
      unneededOffering: "1位 お金、2位 花、3位 食べ物",
      lifeChart: "人生の浮き沈みグラフ",
      familyTree: "家系図",
      gallery: "ギャラリー",
      messageToFamily: "家族へのメッセージ",
      freeMessage: "ありがとうございました",
      blog: "ブログ",
      propose: "プロポーズ",
      lifeChartImageURL : "https://final-sequence-test-resource.s3-ap-northeast-1.amazonaws.com/living-proof/persons/lifeChart.png",
      familyTreeImageURL: "https://final-sequence-test-resource.s3-ap-northeast-1.amazonaws.com/living-proof/persons/familyTree_Tsukahara.png"
    }
  }
}

export default LivingProofAPI;
