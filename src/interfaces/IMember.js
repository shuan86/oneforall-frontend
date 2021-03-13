export const EnumMemberStatus = {
  vistor: "vistor",
  reviewer: "reviewer",
  publisher: "publisher",
};
export const ReviewerStatus = {
  apply: 0,
  UnderReview: 1,
  agreen: 2,
};
export const PublisherStatus = {
  apply: 0,
  UnderReview: 1,
  disagree: 2,
  agree: 3,
};
class LocalStorage {
  constructor() {
    this.memberId = "memberId";
    this.account = "account";
    this.userName = "userName";
    this.token = "token";
    this.email = "email";
    this.publicKey = "publicKey";
    this.isVistor = "isVistor";
    this.isReviewer = "isReviewer";
    this.isPublisher = "isPublisher";
  }
  get getMemberId() {
    return this.memberId;
  }
  get getAccount() {
    return this.account;
  }
  get getUserName() {
    return this.userName;
  }
  get getToken() {
    return this.token;
  }
  get getEmail() {
    return this.email;
  }
  get getPublicKey() {
    return this.publicKey;
  }
  get getIsVistor() {
    return this.isVistor;
  }
  get getIsReviewer() {
    return this.isReviewer;
  }
  get getIsPublisher() {
    return this.isPublisher;
  }
}
export const ILocalStorage = new LocalStorage();
