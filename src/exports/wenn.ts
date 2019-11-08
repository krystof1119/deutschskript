import WennDannObject from "../types/WennDannObject";
import DannSonstObject from "../types/DannSonstObject";

export default function wenn(das: boolean): WennDannObject {
    if (das) {
        return {
            dann: function(dannFunktion: Function): DannSonstObject {
                dannFunktion();
                return {
                    sonst: function (sonstFunktion: Function) {
                        // noop
                    }
                }
            }
        }
    } else {
        return {
            dann: function (dannFunktion: Function) {
                return {
                    sonst: function (sonstFunktion: Function) {
                        sonstFunktion();
                    }
                }
            }
        }
    }
}
