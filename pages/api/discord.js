function discord(request, response){
    const ProjectName = 'loiu';
    const PullRequest = 'http://devops2022/-VisaoGrupo_Projetos/LOIU/_git/LOIU/pullrequest/360';
    const PullName = 'Ajuste versão publicada em produção'
    

fetch("https://discord.com/api/webhooks/1250835048899281069/qlIhoqq77VbHMZ4cFbg67cjFMP3mgiGOZmWimexXpN17SG5CO5uNIj4J2ySy1QVYFeUR", {
    method: "POST",
    body: JSON.stringify
        ({
            "username": "Webhook",
            
            "embeds": 
            [{
                "title": PullName,
                "description":PullRequest,
                "color": 15258703
            }]
        }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
};
export default discord;