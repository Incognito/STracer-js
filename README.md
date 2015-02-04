# STracer - JS Stack trace reporting

[![Join the chat at https://gitter.im/Incognito/STracer-js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Incognito/STracer-js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

STracer is here to help you capture errors that happen on browsers in the wild where you can't traditionally log them with standard equipment.

You can use it to do things like collect errors from the browser and collect them server-side. Maybe other things too. Let me know if you do something neat.

# Use

TODO

# Why?

Lack of open source options for this software.

We can do better than things like this:

    window.onerror = function(errorMsg, url, line) {
        SomeAjaxObject.post('/newError/,
            {'errorMsg': errorMsg, 'url': url, 'line': line}
        );
    };

That might not always be enough, or take advantage of advanced features.

# History

This is a fork-ish re-write of "TraceKit". The library has been unmaintained for a while and the ownership is confusing, with NPM pointing to https://github.com/defunctzombie/TraceKit, the original author being https://github.com/csnover/TraceKit, and references to the canonical repo being https://github.com/occ/TraceKit I decided it was best to move forward without name collisions.
