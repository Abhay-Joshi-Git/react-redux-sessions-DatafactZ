$base-color: #00141E;

@mixin dark-color() {
    background-color:  darken( $base-color, 10% )
}

@mixin light-color() {
    background-color:  lighten( $base-color, 60% )
}

@mixin base-color() {
    background-color: $base-color;
}
