
<!-- Fetzer Design Formulas  -->

function doFetzer() {
  vp = Math.abs(document.form1.first.value);
  idss = Math.abs(document.form1.second.value) / 1000;
  vcc = Math.abs(document.form1.third.value);

  ans = 0.83 * vp / idss;  
  document.form1.answer1.value = Math.round(ans);

  ans = 0.9 * (vcc - 2 * vp) / idss;  
  document.form1.answer2.value = Math.round(ans);

  ans = vp * (0.37 * vcc - 0.65 * vp) / (vcc - 2 * vp);  
  document.form1.answer3.value = Math.round(ans * 100) / 100;

  ans = 0.6 * vcc + 0.7 * vp;  
  document.form1.answer4.value = Math.round(ans * 100) / 100;

  ans = idss * (444 * vcc - 778 * vp) / (vcc - 2 * vp);  
  document.form1.answer5.value = Math.round(ans * 100) / 100;

  ans = 0.542 * (vcc / vp - 2);  
  document.form1.answer6.value = Math.round(ans * 10) / 10;

  ans = 20 * Math.log(0.542 * (vcc / vp - 2)) / Math.log(10);  
  document.form1.answer7.value = Math.round(ans * 10) / 10;

  ans = vcc - 2 * vp;  
  document.form1.answer8.value = Math.round(ans * 10) / 10;

  ans = 1000000000 / (0.83 * vp / idss * 6.283 * 1000);  
  document.form1.answer9.value = Math.round(ans*10)/10;
}

