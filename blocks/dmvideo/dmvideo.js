/*
 * Video Block
 * Show a video referenced by a link
 * https://www.hlx.live/developer/block-collection/video
 */
function loadVideoEmbed(block) {
  console.log(block.classList);
  return `
    <div class="dm-video-embed">
      <style type="text/css">
      #s7video_div.s7videoviewer{
        width:100%; 
        height:auto;
      }
    </style>
    <script type="text/javascript" src="https://s7g10.scene7.com/s7viewers/html5/js/VideoViewer.js"></script>
    <div id="s7video_div" class="video_social"></div>
    <script type="text/javascript">
      var s7videoviewer = new s7viewers.VideoViewer({
        "containerId" : "s7video_div",
        "params" : { 
          "serverurl" : "https://s7g10.scene7.com/is/image/",
          "contenturl" : "https://s7g10.scene7.com/is/content/", 
          "config" : "accorhotelsdev2/Video_social",
          "posterimage": "accorhotelsdev2/dynamicvideo360-sample-4-AVS",
          "videoserverurl": "https://s7g10.scene7.com/is/content",
          "asset" : "accorhotelsdev2/dynamicvideo360-sample-4-AVS" }
      })
    s7videoviewer.init(); 
    </script>
    </div>
  `;
}

export default async function decorate(block) {
  block.innerHTML = loadVideoEmbed(block);
  block.dataset.embedIsLoaded = true;
}
