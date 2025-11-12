function doTask(callback) {
  setTimeout(() => {
    callback();
  }, 3000); // waits 3 seconds
}

function onTaskCompleted() {
  console.log("Task Completed");
}

// Run it
doTask(onTaskCompleted);
