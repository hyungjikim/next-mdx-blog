import { headers } from "next/headers";

export const getSlug = async (): Promise<string | null> => {
  const headersList = await headers();
  const pathname =
    headersList.get("x-pathname") || headersList.get("referer") || "";
  const slugMatch = pathname.match(/\/post\/([^\/\?]+)/);
  return slugMatch ? slugMatch[1] : null;
};
