import { ExtensionConfig } from "../../types/extension-config";
import http from "./http";

export const getExtensionConfig = () => http.get<ExtensionConfig>('/api/extension-config')