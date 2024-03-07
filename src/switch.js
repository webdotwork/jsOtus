const scores = {
  Anna: 10,
  Olga: 1,
  Ivan: 5,
};

let total_score = 0;

export const getScore1 = () => {
  for (const key in scores) {
    switch (key) {
      case "Anna":
      case "Olga":
      case "Ivan":
        total_score += scores[key];
        break;
      default:
        // Handle cases for other keys if needed
        break;
    }
  }
  console.log(total_score);
  return total_score;
};
console.log("getscore1 one is:", getScore1());
