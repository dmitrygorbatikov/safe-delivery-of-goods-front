import {StoragesItem} from "../modules/storages/types";
import {CarItem} from "../modules/cars/types";

export const createdDate = (registerDate: number | undefined) => {
    if (registerDate) {
        return new Date(registerDate).toLocaleDateString() + ' / ' + new Date(registerDate).toLocaleTimeString()
    } else return ''
}
export const msToTime = (duration: number) => {
    let minutes: string | number = parseInt(String((duration / (1000 * 60)) % 60)),
        hours: string | number = parseInt(String((duration / (1000 * 60 * 60)) % 24));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    return hours + ":" + minutes + `${hours > 0 ? 'h' : 'm'}`
}
export const normalizeStorageData = (data: StoragesItem[]) => {
    const storages = []
    for (let i = 0; i < data.length; i++) {
        storages.push({
            _id: data[i]._id,
            latitude: data[i].latitude,
            longitude: data[i].longitude,
            managerId: data[i].managerId,
            title: data[i].title,
            address: data[i].address,
            // @ts-ignore
            temperature: data[i].indicators.temperature ?? 0,
            // @ts-ignore
            humidity: data[i].indicators.humidity ?? 0,
            // @ts-ignore
            measurementDate: new Date(data[i].indicators.measurementDate).toLocaleDateString() === 'Invalid Date' || new Date(data[i].indicators.measurementDate).toLocaleTimeString() === 'Invalid Date' ?
                // @ts-ignore
                '--/--' : new Date(data[i].indicators.measurementDate).toLocaleDateString() === 'Invalid Date' || new Date(data[i].indicators.measurementDate).toLocaleTimeString(),
            registerDate: createdDate(data[i].registerDate)
        })
    }
    return storages
}

export const normalizeCarsData = (data: CarItem[]) => {
    const cars = []
    for (let i = 0; i < data.length; i++) {
        cars.push({
            _id: data[i]._id,
            number: data[i].number.toUpperCase(),
            model: data[i].model,
            carryingCapacity: data[i].carryingCapacity,
            price: data[i].price,
            condition: data[i].condition,
            status: data[i].status,
            registerDate: createdDate(data[i].registerDate)

        })
    }
    return cars
}

export const getRandomCarsIot = () => {
    const engineHeating = Math.floor(Math.random() * (600 - 60)) + 60;
    const inflationOfTires = Math.floor(Math.random() * (120 - 40)) + 40;
    const tightnessOfBolts = Math.floor(Math.random() * (230 - 20)) + 20;
    const measurementDate = createdDate(Date.now())
    return {
        engineHeating,
        inflationOfTires,
        tightnessOfBolts,
        measurementDate
    }
}

export const getRandomStoragesIot = () => {
    const temperature = parseFloat((Math.floor(Math.random() * (35 - 15)) + 15).toString() + '.' + (Math.floor(Math.random() * 10)).toString())
    const humidity = Math.floor(Math.random() * (120 - 40)) + 40;
    const measurementDate = createdDate(Date.now())
    return {
        temperature,
        humidity,
        measurementDate
    }
}