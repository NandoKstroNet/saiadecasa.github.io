require.config({
    baseUrl: 'js/lib',
    paths : {
        app: '../main',
        hgn: 'hgn'
    },
    hgn: {templateExtension: ".html"}
});

require(['json!../../events.json','hgn!../../event'], parseEvents);

function parseEvents(events, template){
    for (event in events) {
        document.getElementById('events')
                .innerHTML += template(events[event]);
    }
}
