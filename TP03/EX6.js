function SommeTableau(Tab){
    return Tab.reduce((a, b) => a + b, 0);
  }
  
  function diffmax(Tab){
    let max = Tab[1]-Tab[0];
    for(i = 0; i < 5; i++){
      res = Tab[i] - Tab[(i-1)];
      if (res > max){
        max = res;
      } 
    }
    return max;
  }
  let T = [1,2,4,4,5];
  alert("La somme du Tableau est "+SommeTableau(T));
  alert("la différence maximale entre deux éléments adjacents d’un tableau d’entiers est "+diffmax(T));