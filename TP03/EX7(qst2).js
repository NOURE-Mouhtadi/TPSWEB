function EstDiagonale(mat) {
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat.length; j++) {
            if (i !== j && mat[i][j] !== 0) 
              return false;
        }
    }
    return true;
}


alert(EstDiagonale([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
alert(EstDiagonale([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));