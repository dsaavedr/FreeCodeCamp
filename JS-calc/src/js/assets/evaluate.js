let cli = (n1, n2, op="-") => {
  return  op === "+" ? n1+n2 : (
            op === "-" ? n1-n2 : (
              op === "x" ? n1*n2 : (
                op === "div" ? n1/n2 : (
                  Math.sqrt(n2)
                )
              )
            )
          );
}

module.exports = cli;
