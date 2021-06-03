import "reflect-metadata";
import { Container } from "inversify";
import coreDIModule from "@core/di/core-di-config";
import seriesDIContainer from "@series/di/series-di-config";

// DI container for whole application
const diContainer = new Container();

// Load the DI modules synchronously
diContainer.load(coreDIModule);
diContainer.load(seriesDIContainer);

export default diContainer;
