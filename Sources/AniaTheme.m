#import "AniaTheme.h"

@implementation AniaTheme

+ (NSColor *)colorWithHex:(uint32_t)hex alpha:(CGFloat)alpha {
    return [NSColor colorWithSRGBRed:((hex >> 16) & 0xFF) / 255.0
                               green:((hex >> 8) & 0xFF) / 255.0
                                blue:(hex & 0xFF) / 255.0
                               alpha:alpha];
}

+ (NSColor *)cream {
    return [self colorWithHex:0xFFF7FA alpha:1.0];
}

+ (NSColor *)blush {
    return [self colorWithHex:0xFFEEF5 alpha:1.0];
}

+ (NSColor *)petal {
    return [self colorWithHex:0xFFDCEA alpha:1.0];
}

+ (NSColor *)rose {
    return [self colorWithHex:0xF7A8C4 alpha:1.0];
}

+ (NSColor *)pink {
    return [self colorWithHex:0xFF6FA5 alpha:1.0];
}

+ (NSColor *)pinkDeep {
    return [self colorWithHex:0xC94B7B alpha:1.0];
}

+ (NSColor *)plum {
    return [self colorWithHex:0x472637 alpha:1.0];
}

+ (NSColor *)plumSoft {
    return [self colorWithHex:0x8A6072 alpha:1.0];
}

+ (NSColor *)lavender {
    return [self colorWithHex:0xCDB4FF alpha:1.0];
}

+ (NSGradient *)titlebarGradient {
    return [[NSGradient alloc] initWithColorsAndLocations:
        [self colorWithHex:0xFFD6E7 alpha:1.0], 0.0,
        [self colorWithHex:0xF4D8FF alpha:1.0], 0.55,
        [self colorWithHex:0xFFE7F1 alpha:1.0], 1.0,
        nil];
}

+ (NSGradient *)miniPlayerGradient {
    return [[NSGradient alloc] initWithColorsAndLocations:
        [self colorWithHex:0xFFFAFC alpha:1.0], 0.0,
        [self colorWithHex:0xFFE9F2 alpha:0.98], 0.58,
        [self colorWithHex:0xFFD8E8 alpha:0.98], 1.0,
        nil];
}

+ (NSGradient *)logoGradient {
    return [[NSGradient alloc] initWithColorsAndLocations:
        [self colorWithHex:0xFFA6C9 alpha:1.0], 0.0,
        [self colorWithHex:0xF06BA2 alpha:1.0], 0.55,
        [self colorWithHex:0xCF4B80 alpha:1.0], 1.0,
        nil];
}

+ (void)drawHeartInRect:(NSRect)rect color:(NSColor *)color {
    CGFloat x = NSMinX(rect);
    CGFloat y = NSMinY(rect);
    CGFloat w = NSWidth(rect);
    CGFloat h = NSHeight(rect);

    NSBezierPath *heart = [NSBezierPath bezierPath];
    [heart moveToPoint:NSMakePoint(x + w * 0.50, y)];
    [heart curveToPoint:NSMakePoint(x, y + h * 0.62)
          controlPoint1:NSMakePoint(x + w * 0.18, y + h * 0.20)
          controlPoint2:NSMakePoint(x, y + h * 0.38)];
    [heart curveToPoint:NSMakePoint(x + w * 0.36, y + h)
          controlPoint1:NSMakePoint(x, y + h * 0.86)
          controlPoint2:NSMakePoint(x + w * 0.16, y + h)];
    [heart curveToPoint:NSMakePoint(x + w * 0.50, y + h * 0.86)
          controlPoint1:NSMakePoint(x + w * 0.46, y + h)
          controlPoint2:NSMakePoint(x + w * 0.50, y + h * 0.94)];
    [heart curveToPoint:NSMakePoint(x + w * 0.64, y + h)
          controlPoint1:NSMakePoint(x + w * 0.50, y + h * 0.94)
          controlPoint2:NSMakePoint(x + w * 0.54, y + h)];
    [heart curveToPoint:NSMakePoint(x + w, y + h * 0.62)
          controlPoint1:NSMakePoint(x + w * 0.84, y + h)
          controlPoint2:NSMakePoint(x + w, y + h * 0.86)];
    [heart curveToPoint:NSMakePoint(x + w * 0.50, y)
          controlPoint1:NSMakePoint(x + w, y + h * 0.38)
          controlPoint2:NSMakePoint(x + w * 0.82, y + h * 0.20)];
    [heart closePath];

    [color setFill];
    [heart fill];
}

@end

#pragma mark - Pill button

@implementation AniaPillButton

- (instancetype)initWithPillTitle:(NSString *)title
                           target:(nullable id)target
                           action:(nullable SEL)action {
    self = [super initWithFrame:NSZeroRect];
    if (!self) { return nil; }
    [self configure];
    self.target = target;
    self.action = action;
    [self setPillTitle:title];
    return self;
}

- (instancetype)initWithFrame:(NSRect)frameRect {
    self = [super initWithFrame:frameRect];
    if (!self) { return nil; }
    [self configure];
    return self;
}

- (void)configure {
    self.bordered = NO;
    self.wantsLayer = NO;
    self.focusRingType = NSFocusRingTypeNone;
    self.font = [NSFont systemFontOfSize:11 weight:NSFontWeightSemibold];
    self.contentTintColor = [AniaTheme pinkDeep];
    self.imagePosition = NSImageLeading;
    self.imageHugsTitle = YES;
    [self applyTitle:self.title];
}

- (void)setPillTitle:(NSString *)title {
    self.title = title;
    [self applyTitle:title];
}

- (void)setTitle:(NSString *)title {
    [super setTitle:title ?: @""];
    [self applyTitle:title];
}

- (void)applyTitle:(NSString *)title {
    if (!self.font) { return; }
    NSMutableParagraphStyle *paragraph = [[NSMutableParagraphStyle alloc] init];
    paragraph.alignment = NSTextAlignmentCenter;
    self.attributedTitle = [[NSAttributedString alloc] initWithString:title ?: @""
                                                           attributes:@{
        NSFontAttributeName: self.font,
        NSForegroundColorAttributeName: [AniaTheme pinkDeep],
        NSParagraphStyleAttributeName: paragraph
    }];
}

- (NSSize)intrinsicContentSize {
    NSSize size = [super intrinsicContentSize];
    return NSMakeSize(size.width + 20, MAX(22, size.height + 4));
}

- (void)drawRect:(NSRect)dirtyRect {
    CGFloat radius = NSHeight(self.bounds) / 2;
    NSRect fillRect = NSInsetRect(self.bounds, 0.5, 0.5);
    NSBezierPath *pill = [NSBezierPath bezierPathWithRoundedRect:fillRect
                                                         xRadius:radius
                                                         yRadius:radius];
    if (self.isHighlighted) {
        [[AniaTheme rose] setFill];
    } else {
        [[AniaTheme petal] setFill];
    }
    [pill fill];

    [[[AniaTheme pinkDeep] colorWithAlphaComponent:0.22] setStroke];
    pill.lineWidth = 1;
    [pill stroke];

    [super drawRect:dirtyRect];
}

@end
