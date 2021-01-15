function newYear() {
  var nextYear = new Date().getFullYear() + 1
  var newDay = nextYear + '/1/1 00:00:00'
  var countDate = new Date(newDay)
  var current = new Date().getTime()
  gap = countDate - current
  var second = 1000
  var minute = second * 60
  var hour = minute * 60
  var day = hour * 24

  var d = Math.floor(gap / day)
  var h = Math.floor((gap % day) / hour)
  var m = Math.floor((gap % hour) / minute)
  var s = Math.floor((gap % minute) / second)

  d = addZero(d)
  h = addZero(h)
  m = addZero(m)
  s = addZero(s)

  // 显示的年
  document.getElementById('Year').innerText = nextYear

  document.getElementById('day').innerText = d
  document.getElementById('hour').innerText = h
  document.getElementById('minute').innerText = m
  document.getElementById('second').innerText = s

  function addZero(num) {
    return num < 10 ? '0' + num : num
  }

  setInterval(() => {
    newYear()
  }, 1000)
}