import shuffle from "just-shuffle";

export const holdDraw = (participants: string[]) => {
  const shuffledArray = shuffle(participants);
  const result = new Map<string, string>();

  for (let index = 0; index < participants.length; index++) {
    const indexFriend = index === participants.length - 1 ? 0 : index + 1;
    result.set(shuffledArray[index], shuffledArray[indexFriend]);
  }

  return result;
};
