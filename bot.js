let options = {  //Conjunto de opções para a configuração do bot
    options: {
        debug: true
    },
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: 'juliohmbbot',
        password: 'oauth:6tl4oacripum2a6l5ciwfyzmtnzfcr'
    },
    channels: ['#juliohmb']
}

let client = window.tmi.client(options)  //inicializa o cliente da biblioteca tmi

client.connect()  //conecta o bot com os canais

client.on('connected', onConnected)  //adiciona um listener e chama a função onConected()
client.on('chat', onChat)


function onConnected(add, port){
    console.log('conectado em: ' + add +':'+ port)
}

function onChat(channel, userstate, message, self){
    console.log(userstate)
    //console.log(userstate.username + ' digitou \"' + message + '\"no canal: ' + channel)
    if(self == true){  //se for mensagem do bot
        console.log('foi o bot')
    }
    else if(message == '!ping'){    //passa a menssagem pong!!
        client.action(channel, 'Pong!!')
    }
    else if(message == '!btag'){    //passa a btag
        client.action(channel, 'Btag: juliohmb#1438')
    }
}