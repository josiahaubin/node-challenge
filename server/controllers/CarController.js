import express from "express"
import CarService from "../services/CarService"

let _carService = new CarService()

export default class CarController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllCars)
  }

  getAllCars() {

  }
}