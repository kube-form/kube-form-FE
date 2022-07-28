import {
    KMSClient,
    CancelKeyDeletionCommand,
    DataKeyPairSpec,
    DataKeySpec,
    GenerateDataKeyPairCommand,
    GenerateDataKeyCommand,
} from '@aws-sdk/client-kms';
import { AES, enc, lib, mode } from 'crypto-js';

const PADLENGTH = 32;

const client = new KMSClient({
    credentials: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESSKEY,
        secretAccessKey: process.env.REACT_APP_AWS_SECRETKEY,
    },
    region: 'ap-northeast-2',
});

const pad = (text) => text.padEnd(PADLENGTH - (text.length % PADLENGTH));
function bytesToHex(bytes) {
    const hex = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < bytes.length; i++) {
        const current = bytes[i] < 0 ? bytes[i] + 256 : bytes[i];
        // eslint-disable-next-line no-bitwise
        hex.push((current >>> 4).toString(16));
        // eslint-disable-next-line no-bitwise
        hex.push((current & 0xf).toString(16));
    }
    // eslint-disable-next-line no-undef
    return hex.join('');
}
// eslint-disable-next-line import/prefer-default-export
export const test = async (text) => {
    const keyARN =
        'arn:aws:kms:ap-northeast-2:170777615631:key/01b838ea-f709-4809-b7f5-eb0edee059bf';
    const keyId = '01b838ea-f709-4809-b7f5-eb0edee059bf';

    // const command = new CancelKeyDeletionCommand({
    //     KeyId: keyId,
    //     KeyARN: keyARN,
    //     PlainText: text,
    // });
    const command = new GenerateDataKeyCommand({
        KeyId: keyARN,
        KeySpec: DataKeySpec.AES_256,
    });
    try {
        const { Plaintext, CiphertextBlob } = await client.send(command);

        const key = Plaintext;
        const ciphertext = AES.encrypt(text, enc.Hex.parse(bytesToHex(key)));
    } catch (e) {
        // const { requestId, cfId, extendedRequestId } = e.$metadata;
        // console.error(e, { requestId, cfId, extendedRequestId });
        console.error(e);
    }
    return null;
};
