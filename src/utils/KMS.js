import {
    KMSClient,
    GenerateDataKeyCommand,
    EncryptCommand,
    DataKeySpec,
} from '@aws-sdk/client-kms';

const encryptData = async (plainText) => {
    const REGION = 'ap-northeast-2';
    const CREDENTIALS = {
        accessKeyId: 'AKIASPQZDTUH6A7B43B7',
        secretAccessKey: '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',
    };

    const client = new KMSClient({
        region: REGION,
        credentials: CREDENTIALS,
    });

    const keyId =
        'arn:aws:kms:ap-northeast-2:170777615631:key/01b838ea-f709-4809-b7f5-eb0edee059bf';
    const KeySpec = 'AES_256';

    const command = new GenerateDataKeyCommand({
        KeyId: keyId,
        KeySpec: DataKeySpec.AES_256,
    });

    // const ret = new EncryptCommand({ KeyId, KeySpec });

    try {
        const result = await client.send(command);
        console.log('this is the encrypted data', result);
    } catch (e) {
        console.log('something wrong : ', e);
    } finally {
        console.log('finally?');
    }
};

export default encryptData;
