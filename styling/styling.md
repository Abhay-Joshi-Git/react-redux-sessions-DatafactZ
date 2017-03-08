Use extend only when you have logical hierarchy/inheritance

when to use extend : https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/
https://www.sitepoint.com/avoid-sass-extend/

use mixin or use class directly on your element for non hierarchial functionality, e.g

.webfont {
    font-family: webfont, sans-serif;
    font-weight: 700;
}

use of mixin - 

@mixin webfont() {
    font-family: webfont, sans-serif;
    font-weight: 700;
}

...

.foo {
    @include webfont();
}

...

.bar {
    @include webfont();
}

...

.baz {
    @include webfont();
}


