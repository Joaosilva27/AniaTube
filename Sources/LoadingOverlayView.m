#import "LoadingOverlayView.h"

#import <QuartzCore/QuartzCore.h>

#import "AniaTheme.h"

#pragma mark - Logo

@interface YTMPlayLogoView : NSView
@end

@implementation YTMPlayLogoView

- (instancetype)initWithFrame:(NSRect)frameRect {
    self = [super initWithFrame:frameRect];
    if (!self) { return nil; }
    self.translatesAutoresizingMaskIntoConstraints = NO;
    return self;
}

- (BOOL)isFlipped {
    return YES;
}

- (void)drawRect:(NSRect)dirtyRect {
    [super drawRect:dirtyRect];

    NSRect bounds = NSInsetRect(self.bounds, 2, 2);
    NSBezierPath *squircle = [NSBezierPath bezierPathWithRoundedRect:bounds xRadius:22 yRadius:22];

    [[AniaTheme logoGradient] drawInBezierPath:squircle angle:-90];

    // Soft top highlight.
    NSBezierPath *highlight = [NSBezierPath bezierPathWithRoundedRect:NSInsetRect(bounds, 1, 1)
                                                              xRadius:21
                                                              yRadius:21];
    [[NSColor colorWithWhite:1.0 alpha:0.16] setStroke];
    highlight.lineWidth = 1;
    [highlight stroke];

    CGFloat side = bounds.size.width;
    CGFloat heartWidth = side * 0.48;
    CGFloat heartHeight = side * 0.44;
    NSRect heartRect = NSMakeRect(NSMidX(bounds) - heartWidth / 2,
                                  NSMidY(bounds) - heartHeight / 2 + 1,
                                  heartWidth, heartHeight);
    [AniaTheme drawHeartInRect:heartRect color:[NSColor whiteColor]];

    // A tiny deep-pink play triangle inside the heart keeps the music cue.
    CGFloat triangleHeight = side * 0.14;
    CGFloat triangleWidth = side * 0.12;
    CGFloat cx = NSMidX(bounds) + side * 0.018;
    CGFloat cy = NSMidY(bounds) + side * 0.035;
    NSBezierPath *play = [NSBezierPath bezierPath];
    [play moveToPoint:NSMakePoint(cx - triangleWidth / 2, cy - triangleHeight / 2)];
    [play lineToPoint:NSMakePoint(cx - triangleWidth / 2, cy + triangleHeight / 2)];
    [play lineToPoint:NSMakePoint(cx + triangleWidth / 2, cy)];
    [play closePath];
    [[AniaTheme pinkDeep] setFill];
    [play fill];
}

@end

#pragma mark - Overlay

@interface LoadingOverlayView ()

@property (nonatomic, strong) NSView *card;
@property (nonatomic, strong) YTMPlayLogoView *logoView;
@property (nonatomic, strong) NSTextField *titleLabel;
@property (nonatomic, strong) NSTextField *detailLabel;
@property (nonatomic, strong) NSProgressIndicator *spinner;
@property (nonatomic, strong) NSButton *retryButton;
@property (nonatomic, copy, nullable) dispatch_block_t retryHandler;

@end

@implementation LoadingOverlayView

- (instancetype)initWithFrame:(NSRect)frameRect {
    self = [super initWithFrame:frameRect];
    if (!self) { return nil; }

    self.wantsLayer = YES;
    // The splash uses the same soft pink as the rest of AniaTube.
    self.appearance = [NSAppearance appearanceNamed:NSAppearanceNameAqua];

    _logoView = [[YTMPlayLogoView alloc] initWithFrame:NSMakeRect(0, 0, 76, 76)];

    _titleLabel = [self labelWithString:@"AniaTube" size:17 weight:NSFontWeightSemibold color:[AniaTheme plum]];
    _detailLabel = [self labelWithString:@"Loading your library…" size:12 weight:NSFontWeightRegular
                                   color:[AniaTheme plumSoft]];
    _detailLabel.alignment = NSTextAlignmentCenter;
    _detailLabel.maximumNumberOfLines = 3;
    _detailLabel.lineBreakMode = NSLineBreakByWordWrapping;
    _detailLabel.preferredMaxLayoutWidth = 360;

    _spinner = [[NSProgressIndicator alloc] init];
    _spinner.translatesAutoresizingMaskIntoConstraints = NO;
    _spinner.style = NSProgressIndicatorStyleSpinning;
    _spinner.controlSize = NSControlSizeSmall;
    _spinner.indeterminate = YES;
    _spinner.displayedWhenStopped = NO;
    [_spinner startAnimation:nil];

    _retryButton = [NSButton buttonWithTitle:@"Try Again" target:self action:@selector(retryPressed:)];
    _retryButton.bezelStyle = NSBezelStyleRounded;
    _retryButton.bezelColor = [AniaTheme pink];
    _retryButton.contentTintColor = [NSColor whiteColor];
    _retryButton.keyEquivalent = @"\r";
    _retryButton.hidden = YES;

    NSStackView *stack = [NSStackView stackViewWithViews:@[_logoView, _titleLabel, _detailLabel, _spinner, _retryButton]];
    stack.translatesAutoresizingMaskIntoConstraints = NO;
    stack.orientation = NSUserInterfaceLayoutOrientationVertical;
    stack.alignment = NSLayoutAttributeCenterX;
    stack.spacing = 12;
    [stack setCustomSpacing:20 afterView:_detailLabel];
    [stack setCustomSpacing:20 afterView:_spinner];
    [self addSubview:stack];

    [NSLayoutConstraint activateConstraints:@[
        [_logoView.widthAnchor constraintEqualToConstant:76],
        [_logoView.heightAnchor constraintEqualToConstant:76],
        [stack.centerXAnchor constraintEqualToAnchor:self.centerXAnchor],
        [stack.centerYAnchor constraintEqualToAnchor:self.centerYAnchor constant:-12],
        [stack.widthAnchor constraintLessThanOrEqualToAnchor:self.widthAnchor constant:-48],
        [_detailLabel.widthAnchor constraintEqualToConstant:360]
    ]];

    return self;
}

- (BOOL)isOpaque {
    return YES;
}

- (void)drawRect:(NSRect)dirtyRect {
    [[AniaTheme cream] setFill];
    NSRectFill(self.bounds);

    NSGradient *wash = [[NSGradient alloc] initWithColorsAndLocations:
        [[AniaTheme blush] colorWithAlphaComponent:0.0], 0.0,
        [[AniaTheme blush] colorWithAlphaComponent:0.9], 1.0,
        nil];
    [wash drawInRect:self.bounds angle:-90];

    // A few oversized, barely-there hearts make the splash feel hand made.
    NSRect bounds = self.bounds;
    NSArray<NSValue *> *spots = @[
        [NSValue valueWithRect:NSMakeRect(NSWidth(bounds) * 0.13, NSHeight(bounds) * 0.70, 64, 60)],
        [NSValue valueWithRect:NSMakeRect(NSWidth(bounds) * 0.22, NSHeight(bounds) * 0.18, 34, 32)],
        [NSValue valueWithRect:NSMakeRect(NSWidth(bounds) * 0.80, NSHeight(bounds) * 0.74, 46, 43)],
        [NSValue valueWithRect:NSMakeRect(NSWidth(bounds) * 0.86, NSHeight(bounds) * 0.26, 74, 70)],
        [NSValue valueWithRect:NSMakeRect(NSWidth(bounds) * 0.63, NSHeight(bounds) * 0.10, 26, 24)]
    ];
    NSArray<NSNumber *> *alphas = @[@0.10, @0.08, @0.09, @0.07, @0.08];
    [spots enumerateObjectsUsingBlock:^(NSValue *value, NSUInteger index, BOOL *stop) {
        NSRect rect = value.rectValue;
        NSColor *color = [[AniaTheme pink] colorWithAlphaComponent:alphas[index].doubleValue];
        [AniaTheme drawHeartInRect:rect color:color];
    }];
}

- (NSTextField *)labelWithString:(NSString *)string
                            size:(CGFloat)size
                          weight:(NSFontWeight)weight
                           color:(NSColor *)color {
    NSTextField *label = [NSTextField labelWithString:string];
    label.font = [NSFont systemFontOfSize:size weight:weight];
    label.textColor = color;
    label.alignment = NSTextAlignmentCenter;
    label.translatesAutoresizingMaskIntoConstraints = NO;
    return label;
}

#pragma mark - States

- (void)showLoadingWithMessage:(NSString *)message {
    self.retryHandler = nil;
    self.hidden = NO;
    self.alphaValue = 1.0;
    self.detailLabel.hidden = NO;
    self.detailLabel.stringValue = message.length > 0 ? message : @"Loading your library…";
    self.spinner.hidden = NO;
    [self.spinner startAnimation:nil];
    self.retryButton.hidden = YES;
    self.titleLabel.stringValue = @"AniaTube";
}

- (void)showErrorWithMessage:(NSString *)message
                      detail:(NSString *)detail
                retryHandler:(void (^)(void))retryHandler {
    self.retryHandler = [retryHandler copy];
    self.hidden = NO;
    self.alphaValue = 1.0;
    self.titleLabel.stringValue = message.length > 0 ? message : @"Something went wrong";
    self.detailLabel.hidden = detail.length == 0;
    self.detailLabel.stringValue = detail ?: @"";
    [self.spinner stopAnimation:nil];
    self.spinner.hidden = YES;
    self.retryButton.hidden = NO;
}

- (void)dismiss {
    if (self.hidden) { return; }
    BOOL reduceMotion = NSWorkspace.sharedWorkspace.accessibilityDisplayShouldReduceMotion;
    if (reduceMotion) {
        self.hidden = YES;
        return;
    }
    [NSAnimationContext runAnimationGroup:^(NSAnimationContext *context) {
        context.duration = 0.35;
        context.timingFunction = [CAMediaTimingFunction functionWithName:kCAMediaTimingFunctionEaseInEaseOut];
        self.animator.alphaValue = 0.0;
    } completionHandler:^{
        self.hidden = YES;
        self.alphaValue = 1.0;
    }];
}

#pragma mark - Actions

- (void)retryPressed:(id)sender {
    dispatch_block_t handler = self.retryHandler;
    if (handler) { handler(); }
}

@end
