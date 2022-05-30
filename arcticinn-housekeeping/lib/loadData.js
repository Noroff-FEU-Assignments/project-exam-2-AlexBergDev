import axios from "axios";

import { SystemFeedback } from "@/components/common";

export default async function loadData(url) {
  let data = [];

  try {
    const res = await axios.get(url);
    data = res.data.data;
  } catch (error) {
    console.log(error);
    return <SystemFeedback status="error">{error}</SystemFeedback>;
  }

  return data;
}
