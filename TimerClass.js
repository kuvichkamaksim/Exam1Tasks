const fn = function() {
  console.log('Timer');
}

class TimerManager {
  constructor(interval) {
    this.interval = interval;
  }

  onTimer() {
    this.timerId = setInterval(fn, this.interval);
  }

  pause() {
    clearInterval(this.timerId);
  }

  resume() {
    if(this.timerId['0'] === null){
      this.onTimer();
    }
  }
}

const timer = new TimerManager(2000);
timer.onTimer();
setTimeout(()=>{timer.pause()}, 6000);
setTimeout(()=>{timer.resume()}, 9000);
