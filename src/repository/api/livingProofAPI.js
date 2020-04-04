class LivingProofAPI {
  static async fetchLivingProofList() {
    return [{
      id: 0,
      name: "塚原宥誼",
      faceImageURL: "https://final-sequence-test-resource.s3.ap-northeast-1.amazonaws.com/living-proof/persons/tsukahara.png",
      description: "プロは言い分けは言わない",
      status: "存命",
      age:75,
    }]
  }
  static async fetchLivingProofDetail(id) {
    return {
      id: id,
      name: "塚原宥誼",
      faceImageURL: "https://final-sequence-test-resource.s3.ap-northeast-1.amazonaws.com/living-proof/persons/tsukahara.png",
      description: "プロは言い分けは言わない",
    }
  }
}

export default LivingProofAPI;
