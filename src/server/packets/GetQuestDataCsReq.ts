import { GetQuestDataCsReq, GetQuestDataScRsp } from "../../data/proto/StarRail";
import Packet from "../kcp/Packet";
import Session from "../kcp/Session";

export default async function handle(session: Session, packet: Packet) {
    const body = packet.body as GetQuestDataCsReq;

    session.send("GetQuestDataScRsp", {
        questList: [],
        retcode: 0,
        takenAchievementLevelList: [],
        totalAchievementExp: 1,
    } as GetQuestDataScRsp);
}