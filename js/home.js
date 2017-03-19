/**
 * Created by andrew on 3/18/17.
 */

$(document).ready(function() {
    $('#fullpage').fullpage({
        'anchors': ['intro','second', 'third'],
        'sectionSelector': 'section',
        'menu':'.nav.navbar-nav'
    });
});
