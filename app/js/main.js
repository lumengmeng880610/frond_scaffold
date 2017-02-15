var oReq = new XMLHttpRequest();
oReq.addEventListener('load', function(e) {
  var arr = JSON.parse(e.currentTarget.responseText);
  var resultHtml = '<ul>';
  for (var i=0; i<arr.length; i++) {
    var todo = arr[i];
    resultHtml += '<li>' + todo.title + ' - ' + (todo.done ? '[完成]' : '[待处理]');
  }
  resultHtml += '</ul>';
  document.write(resultHtml);
});
oReq.open('GET', '/v1/foobizzle.json');
oReq.send();
