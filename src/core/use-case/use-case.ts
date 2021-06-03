import { Failure } from "../api/failure";

export interface UseCase<Type, Params> {
    execute(params: Params): Type | Failure
}