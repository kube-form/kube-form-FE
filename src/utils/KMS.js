import {
    KMSClient,
    GenerateDataKeyCommand,
    EncryptCommand,
} from '@aws-sdk/client-kms';

const encryptData = async (plainText) => {
    const REGION = 'aws-region';
    const CREDENTIALS = {
        accessKeyId: 'AKIASPQZDTUH6A7B43B7',
        secretAccessKey: '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',
    };

    const client = new KMSClient({
        region: REGION,
        credentials: CREDENTIALS,
    });

    const KeyId =
        'arn:aws:kms:ap-northeast-2:170777615631:key/01b838ea-f709-4809-b7f5-eb0edee059bf';
    const KeySpec = 'AES_256';

    // const dataKey = new GenerateDataKeyCommand({ KeyId, KeySpec });
    // const command = GenerateDataKeyCommand(keyId);

    const ret = new EncryptCommand({ KeyId, KeySpec });

    try {
        const result = await client.send(ret);
        console.log('this is the encrypted data', result);
    } catch (e) {
        console.log('something wrong : ', e);
    } finally {
        console.log('finally?');
    }
};

export default encryptData;
