// Constantes de web3 y mqqt, que permitira el despligue de la Web App 
const Web3 = require('web3');
const mqtt = require('mqtt');

// variable que permitira acceder a la dirección HTTP://127.0.0.1:7545
var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
// Se crea una constante de tipo direccioón, donde se colocara la wallet de rinkeby
const address = "0x12AD17f192891b1Ec9b6c15E9a287d9FF70b1042";

// Permitira la conexion del broker de protocolo de comunicación mqqt mediante el puerto 1883
const host = 'broker.emqx.io'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
//Conexión del protocolo mqqt
const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'Kgallardo619',
  password: 'Cucaracha123',
  reconnectPeriod: 1000,
})
// Constante de topic, que permitira ala conexión de la placa ESP32
const topic = 'ESP32ETH/TEMPERATURA'


web3.eth.getTemp
web3.eth.setTemp

const myContract = new web3.eth.Contract([
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": false,
			"internalType": "uint256",
			"name": "id",
			"type": "uint256"
		  },
		  {
			"indexed": false,
			"internalType": "string",
			"name": "NoSerie",
			"type": "string"
		  },
		  {
			"indexed": false,
			"internalType": "string",
			"name": "Name",
			"type": "string"
		  },
		  {
			"indexed": false,
			"internalType": "bool",
			"name": "active",
			"type": "bool"
		  },
		  {
			"indexed": false,
			"internalType": "uint256",
			"name": "addAt",
			"type": "uint256"
		  }
		],
		"name": "SensorAdd",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": false,
			"internalType": "uint256",
			"name": "id",
			"type": "uint256"
		  },
		  {
			"indexed": false,
			"internalType": "bool",
			"name": "active",
			"type": "bool"
		  }
		],
		"name": "SensorStatusActive",
		"type": "event"
	  },
	  {
		"inputs": [],
		"name": "SensorCounter",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "dataTemp",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"name": "sensors",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "id",
			"type": "uint256"
		  },
		  {
			"internalType": "string",
			"name": "NoSerie",
			"type": "string"
		  },
		  {
			"internalType": "string",
			"name": "Name",
			"type": "string"
		  },
		  {
			"internalType": "bool",
			"name": "active",
			"type": "bool"
		  },
		  {
			"internalType": "uint256",
			"name": "addAt",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "string",
			"name": "_NoSerie",
			"type": "string"
		  },
		  {
			"internalType": "string",
			"name": "_Name",
			"type": "string"
		  }
		],
		"name": "AddSensor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "_id",
			"type": "uint256"
		  }
		],
		"name": "SensorStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "_data",
			"type": "uint256"
		  }
		],
		"name": "setTemp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "getTemp",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  }
], address)



//
client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  })
})
client.on('message', (topic, payload) => {
  console.log(parseInt("" + payload))
	myContract.methods.setTemp(parseInt("" + payload)).send({ from: "0x2a1642d1a4e93c28bd230694f5eeb7c42996af6f", gas: 6721975, gasPrice: '30000000' });




})
