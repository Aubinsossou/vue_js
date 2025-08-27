
<template>
    <section class="blog">
        <div class="container">
            <div blog_content>
                <h1>Mon blog</h1>
                <div class="article">
                    <article class="article_items">
                        <div class="img_blog">
                            <img src="../assets/images/amazone.jpg" alt="">
                        </div>
                        <h3>Place de l'amazone</h3>
                        <p>La Place de l’Amazone est située à Cotonou, capitale économique du Bénin.Elle abrite une imposante statue de 30 mètres représentant une guerrière amazone du Dahomey.Ce monument rend hommage aux femmes combattantes du royaume d’Abomey, symbole de courage et de fierté.</p>
                        <RouterLink to="" class="img_link_blog">Lire la suite</RouterLink>
                    </article>
                    <article class="article_items">
                        <div class="img_blog">
                            <img src="../assets/images/ecureil.jpeg" alt="">
                        </div>
                        <h3>Les guépards girls du Bénin</h3>
                        <p>L'équipe nationale féminine du Bénin a validé son ticket pour le second tour des éliminatoires de la Coupe d'Afrique des Nations féminine 2026. Opposées à la Sierra Leone, les Amazones se sont imposées avec maîtrise (3-1) lors du match retour disputé ce lundi 24 février au stade Samuel Kanyon de Libéria.</p>
                        <RouterLink to="" class="img_link_blog">Lire la suite</RouterLink>
                    </article>
                    <article class="article_items">
                        <div class="img_blog">
                            <img src="../assets/images/president.jpeg" alt="">
                        </div>
                        <h3>Le prégo au présidentielle 2026</h3>
                        <p>On peut enfin et définitivement lever le doute sur la candidature ou non de Patrice Talon à la prochaine élection présidentielle. C’est formel. Il ne sera pas dans les starting-blocks.Le prochain président du Bénin sera mon président, celui de mon pays, de ma communauté et de tout ce qui m’est cher », a rassuré le président.</p>
                        <RouterLink to="" class="img_link_blog">Lire la suite</RouterLink>
                    </article>
                </div>

            </div>
        </div>
        
    </section>
</template>

<style scoped>
    .img_blog{
       padding:10px;
        height:200px;
        
    }
    img{
        border-radius:10px;
        width:100%;
        height:100%;
    }
    h1{
        margin:30px 0px;
        font-size:32px;
        text-align:center;
    }
    .article{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        
    }
    .article_items{
        width:300px;
        background-color:rgba(252, 251, 251, 0.41);
        border-radius:10px;
        box-shadow: 12px 15px 22px 5px rgba(0, 0, 0, 0.2);    
        transition: transform 0.2s ease;
        padding-bottom:30px;
    }
    .article_items h3{
        font-size:1.3rem;
        padding:5px;
    }
    .article_items p{
        margin-bottom:20px;
        padding-left:5px;
        opacity:0.7;
        line-height:20px;
    }
    .article_items .img_link_blog{
        padding:10px 30px;
        background-color: #36986d;
        border-radius:7px;
        margin:10px ;
        color:white;
    }
</style>