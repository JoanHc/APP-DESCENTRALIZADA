// SPDX-License-Identifier: MIT
// indicamos la version del contrato
pragma solidity ^0.8.6;
// Se crea un contrato que permitira
contract SensorsContract {
// Indicamos variable si de tipo entera sin signo de tipo publica
    uint public dataTemp;
//variables enteras sin signo con un numero especifico de bits
    uint256 public SensorCounter = 0;
// Se define la variable Sensor, para adquisicion  de los valores del sensor
    struct Sensor{
        uint256 id;
        string NoSerie;
        string Name;
        bool active;
        uint256 addAt;
    }
// Se almacenara la información sobre el evento llamado SensorAdd
    event SensorAdd(
        uint256 id,
        string NoSerie,
        string Name,
        bool active,
        uint256 addAt
    );
// se pasan 2 parametros a nuestra función
    event SensorStatusActive(uint256 id, bool active);


// tipo de asignación
    mapping(uint256 => Sensor) public sensors;

    constructor() {
        AddSensor("NUMERODESERIE01", "Sensor DS18B20 DALLAS");
    }
// funcion que devolvera el valor de las cinco variables que estan dendotro AddSensor
    function AddSensor(string memory _NoSerie, string memory _Name) public
    {
        SensorCounter++;
        sensors[SensorCounter] = Sensor(
            SensorCounter,
            _NoSerie,
            _Name,
            true,
            block.timestamp
        );
        emit SensorAdd(
            SensorCounter,
            _NoSerie,
            _Name,
            true,
            block.timestamp
        );
    }
// funcion que permitira devolver el valor del status del sensor mediante su id
    function SensorStatus(uint256 _id) public {
        Sensor memory _sensor = sensors[_id];
        _sensor.active = !_sensor.active;
        sensors[_id] = _sensor;
        emit SensorStatusActive(_id, _sensor.active);
    }
 // esta funcion nos devolvera el timpo actual
    function setTemp(uint _data) public{
        dataTemp = _data;

    }
// esta funcion nos devolvera el timpo actual
    function getTemp() external view returns (uint) {
        return dataTemp;
    }
}
