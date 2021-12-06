import {StoragesItem} from "../modules/storages/types";
import {CarItem} from "../modules/cars/types";

export const createdDate = (registerDate: number | undefined) => {
    if(registerDate) {
        return new Date(registerDate).toLocaleDateString() + ' / ' + new Date(registerDate).toLocaleTimeString()
    } else return ''
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
                '--/--' :  new Date(data[i].indicators.measurementDate).toLocaleDateString() === 'Invalid Date' || new Date(data[i].indicators.measurementDate).toLocaleTimeString(),
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