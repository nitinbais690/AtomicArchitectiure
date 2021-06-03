import "reflect-metadata";
import { ContainerModule, interfaces } from "inversify";
import { NetworkInfo, NetworkInfoImpl } from "@core/network/network-info";
import { CORE_DI_TYPES } from "@core/di/core-di-types";

/**
 * Configure Application specific DI objects here to manage the dependency properly for large projects
 */
let coreDIModule = new ContainerModule(
    (bind: interfaces.Bind) => {
        bind<NetworkInfo>(CORE_DI_TYPES.NetworkInfo).to(NetworkInfoImpl);
    }
);

// Export the configure
export default coreDIModule