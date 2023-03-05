module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) return false;
  if (str === "") return false;

  let strM = str.split("");
  console.log(strM);
  // The array of opening brakiets simbols
  let openArr = [];
  let idArr = [];
  bracketsConfig.map((con) => openArr.push(con[0]));
  bracketsConfig.map((con) => idArr.push([]));

  let stack = [];
  // The array of opening brakiets

  let id = 1;
  const x = stack.pop();
  strM.map((si) => {
    bracketsConfig.map((con, index) => {
      if (con[1] !== con[0]) {
        if (con[0] === si) stack.push(si);

        if (si === con[1] && stack[stack.length - 1] === con[0]) stack.pop();
      }
      idArr[index][idArr[index].length - 1] === 0 ? (id = 0) : (id = 1);
      if (con[1] === con[0]) {
        if (con[0] === si && id === 1) {
          stack.push(si);
          idArr[index].push(0);
        }

        if (si === con[1] && stack[stack.length - 1] === con[0] && id === 0) {
          stack.pop();
          idArr[index].push(1);
        }
      }
    });
  });

  return stack.length === 0;
};
