import _ from "lodash";

const getInfoData = ({ object, fileds = [] }) => {
    return _.pick(object, fileds);
};

export { getInfoData };
