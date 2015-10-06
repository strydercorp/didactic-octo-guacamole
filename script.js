var running = false
var fullstory_tab = null

function start_fullstory(){
  tab_props = new Object();
  tab_props.url = "https://www.fullstory.com/ui/H7TB/segments/everyone/people/0";
  tab_props.active = true;
  chrome.tabs.create(tab_props, function(tab){
    fullstory_tab = tab;
    running = true;

    script_props = {file: "fullstory_clicker.js"};
    chrome.tabs.executeScript(fullstory_tab.id, script_props);
  });

}

function stop_fullstory(){
  /* Todo handle if someone manually closed it */
  if (fullstory_tab){
    chrome.tabs.remove(fullstory_tab.id, function(){
      fullstory_tab
    })
  }
  else{
    console.log('could not find fullstory tab to close it')
  }
  running = false
  console.log('stop')
}

chrome.browserAction.onClicked.addListener(function(tab) {
  running ? stop_fullstory() : start_fullstory();
});
