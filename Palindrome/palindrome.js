function palindrome(str) {
  str = str.toLowerCase();
  let end = 0;
  let start = 0;
  let cont = true;
  while(cont) {
    if (str.charAt(end) < 'a' || str.charAt(end) > 'z') {
      if(str.charAt(end) >= 1 && str.charAt(end) <= 9){
        end++;
      }
      else {
      let temp1 = str.substring(start, end);
      let temp2 = str.substring(end + 1);
      str = temp1;
      str += temp2;
      }
    }
    else {
      end ++;
    }
    if(end < str.length)
    {
      cont = true
    }
    else cont = false
  }
console.log(str)
  let pal = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let temp = str.charAt(i);
    pal += temp;
  }
  console.log(pal)
  if(pal === str)
    return true;
  return false;
}