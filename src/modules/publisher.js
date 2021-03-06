import * as sendRequest from "./sendRequest";
import * as localStorage from "../modules/localstorage";
export const apply = async (companyName, co, phone, email) => {
  const { token, memberId } = localStorage.getAllData();
  const result = await sendRequest.rsaTokenPostRequest(
    token,
    memberId,
    "/publisher",
    {
      memberId,
      companyName,
      co,
      phone,
      email,
    }
  );
  return result;
};

export const RootPublisherDecision = async (
  id,
  publisherId,
  decision,
  reason
) => {
  const result = await sendRequest.rsaTokenPostRequest(
    token,
    memberId,
    "/rootPublisherDecision",
    { id: id, decision: decision, reason: reason }
  );
  return {
    status: result.status,
  };
};
