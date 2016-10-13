curseur("bleu", 0, 255, 5, 165) ; // Pour faire varier  bleu,
// de 0 à 255, par pas de 5, initialement 165).
   
incrémenteur("Dy", -20, 20, 4, 12);
booléen("avec_des_cercles", false) ; // Pour certaines instructions conditionnelles.

// bleu,  Dy  et  avec_des_cercles  sont alors des variables globales,
// à ne pas (re)déclarer dans le script de dessin
// si l'on veut pouvoir les exploiter dans la fonction de dessin.

entier_255 = function(x,x_max) // Pour convertir  x  en un entier de [0 ; 255].
   {
   if(x < 0) { x = 0 } else if(x > x_max) x = x_max;
   return arrondi(255*x/x_max) ; // arrondi à l'entier le plus proche.
   };

//------------------------------------------------------------------------------------------------------------
   dessiner = function() { // Fonction exécutée 60 fois par seconde.
//------------------------------------------------------------------------------------------------------------
var x, y, dx = 50, dy = 50, Dx, rouge, vert, t = (numImage - 1) % 480 ;

rouge = entier_255(Xsouris,largeur) ; vert = entier_255(Ysouris,hauteur);

Dx = numImage % 120 ; Dx = Dx*(120-Dx)/30 ; // Décalage en abscisse, pour faire osciller le dessin.

fond(255,10,bleu) ; // code RVB.
épaisseur(1) ;       // unité : 1px.

for(y = 10 ; y < hauteur ; y += dy)
   {
   for(x = 15 ; x < largeur ; x += dx)
      {
      coloriage(rouge,vert,50,150*abs(y/hauteur),64) ; // 64 : opacité de 25 %.
      if(avec_des_cercles) { épaisseur(1) ; ellipse(x,y,Dx,Dx) };
      coloriage(y) ; rectangle(x+Dx,y+Dy*(x/10 % 2),20,20);
      }
   };

if(Dx < 20) { épaisseur(5) ; couleur(255,0,0) }
else        { épaisseur(1) ; couleur(128,0,0) };

coloriage(128,0,0) ; triangle(0,t-10, 0,t+10, 10,t);
épaisseur(1) ; couleur(0) ; coloriage(255) ; texte(arrondi(t/60),0,t+4);

}; // ------------------------------ FIN de la fonction de dessin dynamique. ---------------------------------
