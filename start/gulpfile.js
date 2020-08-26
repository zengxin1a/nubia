const gulp = require("gulp");

const cssmin = require("gulp-cssmin");

const autoprefixer = require("gulp-autoprefixer");

const uglify = require("gulp-uglify");

const htmlmin = require("gulp-htmlmin");

const babel = require("gulp-babel");

const del = require("del");

const webserver = require("gulp-webserver");

const sass = require("gulp-sass");

const cssHandler = ()=>{
    return gulp.src("./src/css/**")
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest("./dist/css"))
}

const jsHandler = ()=>{
    return gulp.src("./src/js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"))
}

const htmlHandler = ()=>{
    return gulp.src("./src/pages/*.html")
        .pipe(htmlmin({
            "removeAttributeQuotes":true,
            "removeComments":true,
            "collapseBooleanAttributes":true,
            "collapseWhitespace":true,
            "minifyCSS":true,
            "minifyJS":true,
        }))
        .pipe(gulp.dest("./dist/pages"))
}

const imgHandler = ()=>{
    return gulp.src("./src/img/**")
        .pipe(gulp.dest("./dist/img"))
}

const libHandler = ()=>{
    return gulp.src("./src/lib/**")
        .pipe(gulp.dest("./dist/lib"))
}

const delHandler = ()=>{
    return del(["./dist/css"])
}

const sassHandler = ()=>{
    return gulp.src("./src/css/*.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest("./dist/css"))
}

const watchHandler = ()=>{
    gulp.watch("./src/css/**",gulp.series(delHandler,sassHandler));
    gulp.watch("./src/js/**",jsHandler);
    gulp.watch("./src/pages/*.html",htmlHandler);
    gulp.watch("./src/lib/**",libHandler);
    gulp.watch("./src/img/**",imgHandler);
};

// const serverHandler = ()=>{
//     return gulp.src("./dist")
//         .pipe(webserver({
//             port:"8080",
//             open:"./pages/cart.html",
//             livereload: true,
//         }))
// };

module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(jsHandler,htmlHandler,imgHandler,libHandler,sassHandler),
    // serverHandler,
    watchHandler
)

// module.exports.css = cssHandler;
// module.exports.js = jsHandler;
// module.exports.html = htmlHandler;
// module.exports.lib = libHandler;
// module.exports.img = imgHandler;
// module.exports.watch = watchHandler;
// module.exports.sever = serverHandler;