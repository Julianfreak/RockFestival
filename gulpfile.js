const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

function css (done) {
    console.log("Papá");
    src('src/scss/**/*.scss') // Identifica el archivo SASS
        .pipe ( plumber())
        .pipe( sass().on('error', sass.logError)) // Compila
        .pipe( dest("build/css")) // Almacena la informacion en el disco duro
    done(); // Callback que avisa a gulp cuando llegamos al final
}

function dev (done) {
    watch("src/scss/**/*.scss", css);
    done();
}
 
exports.css = css;
exports.dev = dev;

 // npx gulp + el nombre de la función
 //npm run + el nombre de la función ( se debe incluir en el archivo package.json)
 







































/* 
function tarea(callback) {
    console.log ("Dandole duro!!");
    callback();
}

exports.tarea = tarea; */