import { Model } from 'mongoose';
import { QueueEventService } from 'src/kernel';
import { ObjectId } from 'mongodb';
import { FileService } from 'src/modules/file/services';
import { SubscriptionService } from 'src/modules/subscription/services/subscription.service';
import { FileDto } from 'src/modules/file';
import { UserDto } from 'src/modules/user/dtos';
import { AuthService } from 'src/modules/auth/services';
import { MailerService } from 'src/modules/mailer';
import { UserService } from 'src/modules/user/services';
import { PerformerBlockService } from 'src/modules/block/services';
import { PerformerDto } from '../dtos';
import { PerformerModel, PaymentGatewaySettingModel, CommissionSettingModel, BankingModel } from '../models';
import { PerformerCreatePayload, PerformerUpdatePayload, PerformerRegisterPayload, SelfUpdatePayload, PaymentGatewaySettingPayload, CommissionSettingPayload, BankingSettingPayload } from '../payloads';
export declare class PerformerService {
    private readonly performerBlockService;
    private readonly authService;
    private readonly userService;
    private readonly fileService;
    private readonly subscriptionService;
    private readonly performerModel;
    private readonly queueEventService;
    private readonly mailService;
    private readonly paymentGatewaySettingModel;
    private readonly bankingSettingModel;
    private readonly commissionSettingModel;
    constructor(performerBlockService: PerformerBlockService, authService: AuthService, userService: UserService, fileService: FileService, subscriptionService: SubscriptionService, performerModel: Model<PerformerModel>, queueEventService: QueueEventService, mailService: MailerService, paymentGatewaySettingModel: Model<PaymentGatewaySettingModel>, bankingSettingModel: Model<BankingModel>, commissionSettingModel: Model<CommissionSettingModel>);
    findById(id: string | ObjectId): Promise<PerformerModel>;
    findOne(query: any): Promise<Pick<Pick<import("mongoose")._LeanDocument<PerformerModel>, "updatedAt" | "_id" | "name" | "height" | "status" | "createdBy" | "createdAt" | "__v" | "id" | "firstName" | "lastName" | "email" | "phone" | "avatarId" | "avatarPath" | "username" | "gender" | "country" | "verifiedEmail" | "isOnline" | "phoneCode" | "idVerificationId" | "documentVerificationId" | "city" | "state" | "zipcode" | "address" | "languages" | "weight" | "bio" | "eyes" | "sexualPreference" | "monthlyPrice" | "yearlyPrice" | "stats" | "verifiedAccount" | "verifiedDocument" | "score" | "activateWelcomeVideo" | "pubicHair" | "ethnicity" | "bodyType" | "dateOfBirth" | "butt" | "hair" | "coverId" | "coverPath" | "welcomeVideoId" | "welcomeVideoPath" | "onlineAt" | "offlineAt">, "updatedAt" | "_id" | "name" | "height" | "status" | "createdBy" | "createdAt" | "__v" | "id" | "firstName" | "lastName" | "email" | "phone" | "avatarId" | "avatarPath" | "username" | "gender" | "country" | "verifiedEmail" | "isOnline" | "phoneCode" | "idVerificationId" | "documentVerificationId" | "city" | "state" | "zipcode" | "address" | "languages" | "weight" | "bio" | "eyes" | "sexualPreference" | "monthlyPrice" | "yearlyPrice" | "stats" | "verifiedAccount" | "verifiedDocument" | "score" | "activateWelcomeVideo" | "pubicHair" | "ethnicity" | "bodyType" | "dateOfBirth" | "butt" | "hair" | "coverId" | "coverPath" | "welcomeVideoId" | "welcomeVideoPath" | "onlineAt" | "offlineAt">>;
    getBankingSettings(performerId: ObjectId): Promise<BankingModel>;
    checkExistedEmailorUsername(payload: any): Promise<number>;
    findByUsername(username: string, countryCode?: string, currentUser?: UserDto): Promise<PerformerDto>;
    findByEmail(email: string): Promise<PerformerDto>;
    findByIds(ids: any[]): Promise<PerformerModel[]>;
    getDetails(id: string | ObjectId, jwtToken: string): Promise<PerformerDto>;
    userGetDetails(id: string | ObjectId, jwtToken: string): Promise<PerformerDto>;
    delete(id: string): Promise<{
        deleted: boolean;
    }>;
    create(payload: PerformerCreatePayload, user?: UserDto): Promise<PerformerDto>;
    register(payload: PerformerRegisterPayload): Promise<PerformerDto>;
    adminUpdate(id: string | ObjectId, payload: PerformerUpdatePayload): Promise<any>;
    selfUpdate(id: string | ObjectId, payload: SelfUpdatePayload): Promise<boolean>;
    userSwitchAccount(data: any): Promise<PerformerModel>;
    updateAvatar(user: PerformerDto, file: FileDto): Promise<FileDto>;
    updateCover(user: PerformerDto, file: FileDto): Promise<FileDto>;
    updateWelcomeVideo(user: PerformerDto, file: FileDto): Promise<FileDto>;
    checkSubscribed(performerId: string | ObjectId, user: UserDto): Promise<{
        subscribed: boolean;
    }>;
    viewProfile(id: string | ObjectId): Promise<any>;
    updateStats(id: string | ObjectId, payload: Record<string, number>): Promise<any>;
    updatePaymentGateway(payload: PaymentGatewaySettingPayload): Promise<PaymentGatewaySettingModel>;
    getPaymentSetting(performerId: string | ObjectId, service?: string): Promise<PaymentGatewaySettingModel>;
    updateSubscriptionStat(performerId: string | ObjectId, num?: number): Promise<any>;
    updateLikeStat(performerId: string | ObjectId, num?: number): Promise<any>;
    updateCommissionSetting(performerId: string, payload: CommissionSettingPayload): Promise<CommissionSettingModel>;
    updateBankingSetting(performerId: string, payload: BankingSettingPayload, currentUser: UserDto): Promise<BankingModel>;
    updateVerificationStatus(userId: string | ObjectId): Promise<any>;
    getCommissions(performerId: string | ObjectId): Promise<CommissionSettingModel>;
    checkAuthDocument(req: any, user: UserDto): Promise<boolean>;
    updatePreApprovalCode(performerId: string | ObjectId, data: Partial<Record<'monthlyPreApprovalRequestCode' | 'yearlyPreApprovalRequestCode', string>>): Promise<any>;
    findByPreApprovalCode(performerId: string | ObjectId, data: Partial<Record<'monthlyPreApprovalRequestCode' | 'yearlyPreApprovalRequestCode', string>>): Promise<PerformerModel>;
}